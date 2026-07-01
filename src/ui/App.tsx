import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Edge, Node } from "reactflow";
import { isAcceptedVerbatim, refinePrompt } from "../domain/refineryEngine";
import { familyOrder, promptFamilies } from "../domain/promptFamilies";
import type { ClarificationQuestion, FewShotExample, OutputBlock, PromptState, RefineryModeConfig, RefineryOutput, WorkflowProfile } from "../domain/types";
import {
  getSavedRoles,
  persistAcceptedPrompt,
  persistClarificationAnswer,
  persistTurn,
  saveRole,
  scaffoldWorkspace,
  type SavedRole
} from "../services/fileWriter";

const conversationId = "0000";

const defaultWorkflowProfile: WorkflowProfile = {
  id: "default",
  name: "Default workflow profile",
  autoGenerateExamples: true,
  defaultExampleCount: 3,
  exampleStrictness: "balanced",
  useSavedExampleSetByDefault: false,
  collapseExamplesByDefault: true,
  allowUserEditedExamplesOverride: true,
  savedExamples: []
};

interface PromptPass {
  id: string;
  state: PromptState;
  family: string;
  summary: string;
}

interface ConversationEntry {
  id: string;
  title: string;
  kind: "prompt" | "response" | "scratch" | "critique";
  content: string;
}

interface DiffLine {
  kind: "same" | "added" | "removed";
  text: string;
}

type AppTab = "compose" | "refine" | "accepted" | "advanced";

function now() {
  return new Date().toISOString();
}

function makeSystemContent(output: RefineryOutput) {
  return [
    "# Refined Understanding",
    output.refinedUnderstanding,
    "",
    "# Canonical Execution Prompt",
    output.canonicalPrompt,
    "",
    "# Expected Response Blueprint",
    output.responseBlueprint,
    "",
    "# Defined Steps",
    output.actionSteps.map((step, index) => `${index + 1}. ${step}`).join("\n"),
    "",
    "# Scenario Follow-up Prompts",
    output.scenarioPrompts.map((prompt, index) => `${index + 1}. ${prompt}`).join("\n"),
    "",
    "# Expansion Prompts",
    output.expansionPrompts.map((prompt, index) => `${index + 1}. ${prompt}`).join("\n"),
    "",
    "# Next Action",
    output.nextAction,
    "",
    "# Why This Action",
    output.nextActionReason,
    "",
    "# Action After That",
    output.actionAfterNext,
    "",
    "# Next Prompt To Give Back",
    output.nextCanonicalPrompt,
    "",
    "# Critique Template",
    output.critiqueTemplate,
    "",
    "# Suggested Next Prompt",
    output.suggestedNextPrompt
  ].join("\n");
}

function buildMockAcceptedResponse(output: RefineryOutput) {
  if (output.outputKind === "package") {
    return [
      "## Accepted Package Response",
      "",
      "### 1. Package Confirmation",
      output.refinedUnderstanding,
      "",
      "### 2. Pinned Package Blocks",
      packageToText(output.canonicalPackage),
      "",
      "### 3. Next Package Action",
      output.nextAction
    ].join("\n");
  }
  return [
    "## Accepted Prompt Response",
    "",
    "### 1. Goal Confirmation",
    output.refinedUnderstanding,
    "",
    "### 2. Fastest Execution Path",
    ...output.actionSteps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "### 3. Expected Output Contract",
    output.responseBlueprint,
    "",
    "### 4. Scenario Prompt Menu",
    ...output.scenarioPrompts.map((prompt, index) => `${index + 1}. ${prompt}`),
    "",
    "### 5. Expand If Needed",
    ...output.expansionPrompts.map((prompt, index) => `${index + 1}. ${prompt}`)
  ].join("\n");
}

function applyCritiqueToPrompt(prompt: string, critique: string) {
  const trimmed = critique.trim();
  if (!trimmed) return prompt;
  return [
    prompt,
    "",
    "Critique-driven changes to apply:",
    trimmed,
    "",
    "When producing the final answer, apply the critique above by changing only the necessary parts of the plan, prompt, sections, assumptions, constraints, or output contract."
  ].join("\n");
}

function refineCritiqueText(critique: string) {
  const trimmed = critique.trim();
  const lines = trimmed
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const bullets = lines.length ? lines : [trimmed];
  return [
    "## Structured Critique To Apply",
    "",
    "### User Intent",
    "Apply the user's critique directly. Do not critique the critique. Convert it into clear prompt changes.",
    "",
    "### Requested Changes",
    ...bullets.map((line) => `- ${line.replace(/^[-*]\s*/, "")}`),
    "",
    "### Application Rules",
    "- Preserve the original goal unless the critique explicitly changes it.",
    "- Change only the sections needed to satisfy the critique.",
    "- Keep the prompt focused on reducing back-and-forth.",
    "- Keep next action, action-after-next, and next prompt behavior intact."
  ].join("\n");
}

function diffPrompt(before: string, after: string): DiffLine[] {
  const beforeLines = before.split("\n");
  const afterLines = after.split("\n");
  const max = Math.max(beforeLines.length, afterLines.length);
  const lines: DiffLine[] = [];
  for (let index = 0; index < max; index += 1) {
    const oldLine = beforeLines[index];
    const newLine = afterLines[index];
    if (oldLine === newLine) {
      if (oldLine !== undefined) lines.push({ kind: "same", text: oldLine });
      continue;
    }
    if (oldLine !== undefined) lines.push({ kind: "removed", text: oldLine });
    if (newLine !== undefined) lines.push({ kind: "added", text: newLine });
  }
  return lines;
}

function hierarchyClass(line: string) {
  const match = line.match(/^(\d+(?:\.\d+)*)[.)]?\s/);
  if (!match) return "depth-0";
  const depth = match[1].split(".").length;
  return `depth-${Math.min(depth, 4)}`;
}

function displayState(state: PromptState, hasGenerated: boolean) {
  if (!hasGenerated) return "Not generated";
  if (state === "clarification_needed") return "Needs answer";
  if (state === "accepted_verbatim") return "Accepted";
  if (state === "prompt_revised") return "Ready for review";
  if (state === "ready_for_acceptance") return "Ready for review";
  if (state === "critique_received") return "Critique applied";
  if (state === "prompt_draft_returned") return "Draft";
  return "Draft";
}

function StructuredText({ text }: { text: string }) {
  return (
    <div className="structured-text">
      {text.split("\n").map((line, index) => (
        <div className={hierarchyClass(line)} key={`${line}-${index}`}>
          {line || "\u00a0"}
        </div>
      ))}
    </div>
  );
}

function EditableTextBox({
  text,
  onChange
}: {
  text: string;
  onChange?: (nextText: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [localText, setLocalText] = useState(text);

  useEffect(() => {
    setLocalText(text);
  }, [text]);

  function updateText(nextText: string) {
    setLocalText(nextText);
    onChange?.(nextText);
  }

  return (
    <div className={expanded ? "editable-box expanded" : "editable-box collapsed"}>
      <div className="text-toolbar">
        <button className="mini-action" onClick={() => setExpanded((current) => !current)} type="button">
          {expanded ? "Collapse" : "Expand"}
        </button>
        <span>{editing ? "Editing" : "Click text to edit"}</span>
      </div>
      {editing ? (
        <textarea
          className={expanded ? "editable-textarea expanded" : "editable-textarea collapsed"}
          onBlur={() => setEditing(false)}
          onChange={(event) => updateText(event.target.value)}
          value={localText}
        />
      ) : (
        <div onClick={() => setEditing(true)} onKeyDown={() => setEditing(true)} role="button" tabIndex={0}>
          <StructuredText text={localText} />
        </div>
      )}
    </div>
  );
}

function PromptDiff({ lines }: { lines: DiffLine[] }) {
  if (!lines.length) return <p className="muted">No critique changes applied yet.</p>;
  return (
    <div className="prompt-diff">
      {lines.map((line, index) => (
        <div className={`diff-line ${line.kind}`} key={`${line.kind}-${index}`}>
          <span>{line.kind === "added" ? "+" : line.kind === "removed" ? "-" : " "}</span>
          <code>{line.text || "\u00a0"}</code>
        </div>
      ))}
    </div>
  );
}

function packageToText(blocks: OutputBlock[] = []) {
  return blocks
    .filter((block) => block.pinned)
    .map((block) => {
      const children = block.children?.length
        ? `\n\nSubsteps:\n${block.children.map((child, index) => `${index + 1}. ${child.title}: ${child.content}`).join("\n")}`
        : "";
      return `## ${block.title}\n${block.content}${children}`;
    })
    .join("\n\n");
}

function examplesToText(examples: FewShotExample[] = []) {
  const active = examples.filter((example) => example.enabled);
  if (!active.length) return "";
  return [
    "## Few-Shot Examples Shaping This Output",
    ...active.map((example, index) =>
      [
        "",
        `### ${index + 1}. ${example.title}`,
        `Purpose: ${example.purpose}`,
        `Input example: ${example.inputExample}`,
        `Output example: ${example.outputExample}`,
        `Why this matters: ${example.whyItMatters}`,
        `Tags: ${example.tags.join(", ")}`
      ].join("\n")
    )
  ].join("\n");
}

function canonicalOutputText(output: RefineryOutput) {
  const examples = examplesToText(output.fewShotExamples);
  const mainOutput = output.outputKind === "package" ? packageToText(output.canonicalPackage) : output.canonicalPrompt;
  return [examples, mainOutput].filter(Boolean).join("\n\n");
}

const promptOutputMode: RefineryModeConfig = {
  kind: "prompt_output",
  label: "Prompt Output",
  description: "Turn rough intent into a canonical prompt, package, or prompt pipeline."
};

const responseRefinementMode: RefineryModeConfig = {
  kind: "response_refinement",
  label: "Refined Response",
  description: "Reverse-engineer a draft response into a clearer, better-targeted reply.",
  tone: "matter-of-fact, helpful, and direct",
  length: "complete but concise",
  audience: "the intended reader",
  channel: "chat or message"
};

function makeCustomMode(raw: string): RefineryModeConfig {
  const cleaned = raw.trim() || "Create a custom workflow mode.";
  const firstWords = cleaned.split(/\s+/).slice(0, 4).join(" ");
  const label = firstWords.length > 24 ? `${firstWords.slice(0, 24)}...` : firstWords;
  return {
    kind: "custom",
    label: label.replace(/[.?!,:;]+$/g, "") || "Custom Mode",
    description: `Custom mode generated from: ${cleaned.slice(0, 140)}${cleaned.length > 140 ? "..." : ""}`,
    rawPrompt: cleaned,
    fixedContext: "Use the user's current input plus this saved mode as the operating frame.",
    desiredOutcome: "Return the artifact this mode is designed to produce with a clear next action.",
    role: "Matter-of-fact specialist for the selected custom workflow"
  };
}

function OutputBlockCard({
  block,
  onUpdate,
  onDelete,
  onRegenerate,
  onAskMore,
  onSplit,
  onConvertToPrompt
}: {
  block: OutputBlock;
  onUpdate: (block: OutputBlock) => void;
  onDelete: () => void;
  onRegenerate: () => void;
  onAskMore: () => void;
  onSplit: () => void;
  onConvertToPrompt: () => void;
}) {
  return (
    <article className={block.pinned ? "output-block pinned" : "output-block"}>
      <header>
        <div>
          <p className="eyebrow">{block.type.replace(/_/g, " ")}</p>
          <h3>{block.title}</h3>
          {block.summary && <p>{block.summary}</p>}
        </div>
        <button
          className="mini-action"
          onClick={() => onUpdate({ ...block, expanded: !block.expanded })}
          type="button"
        >
          {block.expanded ? "Collapse" : "Expand"}
        </button>
      </header>
      {block.expanded && (
        <>
          <EditableTextBox text={block.content} onChange={(content) => onUpdate({ ...block, content })} />
          {block.children?.length ? (
            <div className="substep-list">
              {block.children.map((child) => (
                <div key={child.id}>
                  <strong>{child.title}</strong>
                  <p>{child.content}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="block-actions">
            <button className="secondary compact" onClick={() => onUpdate({ ...block, pinned: !block.pinned })} type="button">
              {block.pinned ? "Unpin" : "Pin"}
            </button>
            <button className="secondary compact" disabled={!block.regeneratable} onClick={onRegenerate} type="button">
              Regenerate
            </button>
            <button className="secondary compact" disabled={!block.askMoreEnabled} onClick={onAskMore} type="button">
              Ask More
            </button>
            <button className="secondary compact" onClick={onSplit} type="button">
              Split
            </button>
            <button className="secondary compact" onClick={onConvertToPrompt} type="button">
              Follow-up Prompt
            </button>
            {block.removable && (
              <button className="danger compact" onClick={onDelete} type="button">
                Delete
              </button>
            )}
          </div>
        </>
      )}
    </article>
  );
}

function FewShotExampleCard({
  example,
  onUpdate,
  onRemove,
  onRegenerate,
  onGeneratePrompt
}: {
  example: FewShotExample;
  onUpdate: (example: FewShotExample) => void;
  onRemove: () => void;
  onRegenerate: () => void;
  onGeneratePrompt: () => void;
}) {
  return (
    <article className={example.enabled ? "example-card" : "example-card disabled"}>
      <header>
        <div>
          <p className="eyebrow">{example.source} · {example.requestFamily}</p>
          <h3>{example.title}</h3>
          <p>{example.purpose}</p>
        </div>
        <button className="mini-action" onClick={() => onUpdate({ ...example, expanded: !example.expanded })} type="button">
          {example.expanded ? "Collapse" : "Expand"}
        </button>
      </header>
      <div className="example-meta">
        <span>{example.enabled ? "Enabled" : "Disabled"}</span>
        <span>{example.pinned ? "Pinned" : "Unpinned"}</span>
        <span>{example.tags.join(", ")}</span>
      </div>
      {example.expanded && (
        <div className="example-body">
          <label>
            Purpose
            <textarea value={example.purpose} onChange={(event) => onUpdate({ ...example, purpose: event.target.value })} />
          </label>
          <label>
            Input example
            <textarea value={example.inputExample} onChange={(event) => onUpdate({ ...example, inputExample: event.target.value })} />
          </label>
          <label>
            Output example
            <textarea value={example.outputExample} onChange={(event) => onUpdate({ ...example, outputExample: event.target.value })} />
          </label>
          <label>
            Why this example matters
            <textarea value={example.whyItMatters} onChange={(event) => onUpdate({ ...example, whyItMatters: event.target.value })} />
          </label>
          <div className="block-actions">
            <button className="secondary compact" onClick={() => onUpdate({ ...example, enabled: !example.enabled })} type="button">
              {example.enabled ? "Disable" : "Enable"}
            </button>
            <button className="secondary compact" onClick={() => onUpdate({ ...example, pinned: !example.pinned })} type="button">
              {example.pinned ? "Unpin" : "Pin"}
            </button>
            <button className="secondary compact" onClick={onRegenerate} type="button">
              Regenerate
            </button>
            <button className="secondary compact" onClick={onGeneratePrompt} type="button">
              Next Prompt
            </button>
            <button className="danger compact" onClick={onRemove} type="button">
              Remove
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function QuestionCard({
  question,
  onAnswer,
  onSkip,
  onBestAssumption
}: {
  question: ClarificationQuestion;
  onAnswer: (answer: string[]) => void;
  onSkip: () => void;
  onBestAssumption: () => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");
  return (
    <motion.section
      className="question-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.22 }}
    >
      <p className="eyebrow">Clarification</p>
      <h2>{question.prompt}</h2>
      <p className="muted">{question.reason}</p>
      <div className="chips">
        {question.options.map((option) => (
          <button
            className={selected.includes(option) ? "chip active" : "chip"}
            key={option}
            onClick={() =>
              setSelected((current) =>
                current.includes(option) ? current.filter((item) => item !== option) : [...current, option]
              )
            }
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
      <input value={other} onChange={(event) => setOther(event.target.value)} placeholder="Other (describe)" />
      <div className="button-row">
        <button className="primary compact" onClick={() => onAnswer([...selected, other].filter(Boolean))} type="button">
          Answer
        </button>
        <button className="secondary compact" onClick={onSkip} type="button">
          Skip
        </button>
        <button className="secondary compact" onClick={onBestAssumption} type="button">
          Continue Without Questions
        </button>
      </div>
    </motion.section>
  );
}

export function App() {
  const [input, setInput] = useState("I want to start a portfolio automation project that helps me use AI better.");
  const [role, setRole] = useState("");
  const [showPrinciples, setShowPrinciples] = useState(true);
  const [modeConfirmed, setModeConfirmed] = useState(false);
  const [selectedModeKind, setSelectedModeKind] = useState<RefineryModeConfig["kind"]>("prompt_output");
  const [customModes, setCustomModes] = useState<RefineryModeConfig[]>([]);
  const [activeCustomModeLabel, setActiveCustomModeLabel] = useState("");
  const [customModeDraft, setCustomModeDraft] = useState("Create a portfolio generation mode that returns a project idea, MVP scope, fixed context, prompt parameters, and the next action.");
  const [responseTone, setResponseTone] = useState(responseRefinementMode.tone || "");
  const [responseLength, setResponseLength] = useState(responseRefinementMode.length || "");
  const [responseAudience, setResponseAudience] = useState(responseRefinementMode.audience || "");
  const [responseChannel, setResponseChannel] = useState(responseRefinementMode.channel || "");
  const [output, setOutput] = useState<RefineryOutput>(() => refinePrompt(input, role, showPrinciples, {}, promptOutputMode));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [critique, setCritique] = useState("");
  const [acceptanceInput, setAcceptanceInput] = useState("");
  const [state, setState] = useState<PromptState>("intake_received");
  const [saved, setSaved] = useState("Not saved yet");
  const [status, setStatus] = useState("Ready. Write or edit the goal, then generate a prompt.");
  const [handshakeResult, setHandshakeResult] = useState("No handshake checked yet.");
  const [copyStatus, setCopyStatus] = useState("Not copied yet.");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [passes, setPasses] = useState<PromptPass[]>([]);
  const [mainConversation, setMainConversation] = useState<ConversationEntry[]>([]);
  const [scratchConversation, setScratchConversation] = useState<ConversationEntry[]>([]);
  const [promptDiffLines, setPromptDiffLines] = useState<DiffLine[]>([]);
  const [structuredCritique, setStructuredCritique] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>("compose");
  const [savedRoles, setSavedRoles] = useState<SavedRole[]>([]);
  const [roleSaveStatus, setRoleSaveStatus] = useState("No role saved yet.");
  const [workflowProfile, setWorkflowProfile] = useState<WorkflowProfile>(defaultWorkflowProfile);
  const [exampleStatus, setExampleStatus] = useState("Generated examples are ready to inspect.");
  const [manualStep, setManualStep] = useState<number | null>(null);
  const turnIndex = useRef(0);

  useEffect(() => {
    void scaffoldWorkspace();
    void getSavedRoles().then(setSavedRoles);
  }, []);

  const activeQuestion = output.questions[questionIndex];
  const openQuestions = Math.max(output.questions.length - Object.keys(answers).length, 0);
  const canAccept = openQuestions === 0 && state !== "clarification_needed";
  const selectedCustomMode = customModes.find((mode) => mode.label === activeCustomModeLabel) || customModes[0];
  const activeModeConfig: RefineryModeConfig =
    selectedModeKind === "response_refinement"
      ? {
          ...responseRefinementMode,
          tone: responseTone,
          length: responseLength,
          audience: responseAudience,
          channel: responseChannel,
          role: role || responseRefinementMode.role
        }
      : selectedModeKind === "custom" && selectedCustomMode
        ? selectedCustomMode
        : promptOutputMode;

  function createCustomMode() {
    const mode = makeCustomMode(customModeDraft);
    setCustomModes((current) => [mode, ...current.filter((item) => item.label !== mode.label)]);
    setActiveCustomModeLabel(mode.label);
    setSelectedModeKind("custom");
    setStatus(`Created custom mode: ${mode.label}.`);
  }

  function confirmModeSelection() {
    let modeToUse = activeModeConfig;
    if (selectedModeKind === "custom" && !selectedCustomMode) {
      const mode = makeCustomMode(customModeDraft);
      setCustomModes((current) => [mode, ...current.filter((item) => item.label !== mode.label)]);
      setActiveCustomModeLabel(mode.label);
      modeToUse = mode;
    }
    setModeConfirmed(true);
    setManualStep(1);
    setStatus(`${modeToUse.label} mode selected. Add the input, then generate.`);
  }

  const nodes: Node[] = useMemo(
    () => [
      { id: "intake", data: { label: "Intake" }, position: { x: 0, y: 40 } },
      { id: "classify", data: { label: output.family }, position: { x: 180, y: 40 } },
      { id: "clarify", data: { label: `${openQuestions} open questions` }, position: { x: 360, y: 40 } },
      { id: "canonical", data: { label: "Canonical prompt" }, position: { x: 560, y: 40 } },
      { id: "accept", data: { label: state === "accepted_verbatim" ? "Accepted" : "Handshake" }, position: { x: 780, y: 40 } }
    ],
    [openQuestions, output.family, state]
  );
  const edges: Edge[] = [
    { id: "a", source: "intake", target: "classify" },
    { id: "b", source: "classify", target: "clarify" },
    { id: "c", source: "clarify", target: "canonical" },
    { id: "d", source: "canonical", target: "accept" }
  ];

  async function runRefinery() {
    setStatus("Classifying and drafting...");
    setHasGenerated(true);
    const refined = refinePrompt(input, role, showPrinciples, {}, activeModeConfig);
    setOutput(refined);
    setQuestionIndex(0);
    setAnswers({});
    setState(refined.questions.length ? "clarification_needed" : "ready_for_acceptance");
    setManualStep(refined.questions.length ? 2 : 3);
    const currentTurn = turnIndex.current;
    turnIndex.current += 1;
    try {
      await persistTurn(conversationId, {
      id: `${conversationId}.${currentTurn}.0`,
      role: "user",
      timestamp: now(),
      state: "intake_received",
      content: input
      });
      await persistTurn(conversationId, {
      id: `${conversationId}.${currentTurn}.5`,
      role: "system",
      timestamp: now(),
      state: refined.state,
      promptFamily: refined.family,
      pass: currentTurn + 1,
      content: makeSystemContent(refined),
      critiqueTemplate: refined.critiqueTemplate,
      canonicalPrompt: refined.canonicalPrompt,
      suggestedNextPrompt: refined.suggestedNextPrompt,
      questions: refined.questions
      });
      setSaved(`Saved conversation ${conversationId} at ${new Date().toLocaleTimeString()}`);
    } catch (error) {
      setSaved("Drafted in the browser, but file save failed. Check the API server.");
      console.error(error);
    }
    setScratchConversation((current) => [
      {
        id: `${conversationId}.${currentTurn}.0`,
        title: "Scratch input",
        kind: "scratch",
        content: input
      },
      {
        id: `${conversationId}.${currentTurn}.5`,
        title: "Draft prompt generated",
        kind: "scratch",
        content: makeSystemContent(refined)
      },
      ...current
    ]);
    setPasses([
      {
        id: `${conversationId}.${currentTurn}.5`,
        state: refined.state,
        family: refined.family,
        summary: refined.questions.length
          ? `Drafted with ${refined.questions.length} clarification question${refined.questions.length === 1 ? "" : "s"}.`
          : "Drafted and ready for acceptance."
      },
      ...passes
    ]);
    setStatus(
      refined.questions.length
        ? "Draft ready. Answer the clarification cards below; the final answer will regenerate the prompt."
        : "Draft ready. Review, copy, accept, or apply an optional critique."
    );
    setActiveTab(refined.questions.length ? "refine" : "compose");
  }

  async function answerQuestion(answer: string[]) {
    if (!activeQuestion) return;
    setStatus(`Saved answer for: ${activeQuestion.prompt}`);
    const nextAnswers = { ...answers, [activeQuestion.id]: answer };
    setAnswers(nextAnswers);
    try {
      await persistClarificationAnswer(conversationId, activeQuestion.id, answer);
    } catch (error) {
      console.error(error);
      setSaved("Answer captured in the browser, but file save failed. Check the API server.");
    }
    if (questionIndex < output.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setStatus("Answer saved. Next clarification card is ready.");
    } else {
      setStatus("All answers saved. Regenerating the canonical output with your answers...");
      setHasGenerated(true);
      const revised = refinePrompt(input, role, showPrinciples, nextAnswers, activeModeConfig);
      setOutput(revised);
      setQuestionIndex(0);
      setState("ready_for_acceptance");
      setManualStep(3);
      setAcceptanceInput("");
      const currentTurn = turnIndex.current;
      turnIndex.current += 1;
      try {
        await persistTurn(conversationId, {
          id: `${conversationId}.${currentTurn}.5`,
          role: "system",
          timestamp: now(),
          state: "prompt_revised",
          promptFamily: revised.family,
          pass: currentTurn + 1,
          content: makeSystemContent(revised),
          critiqueTemplate: revised.critiqueTemplate,
          canonicalPrompt: revised.canonicalPrompt,
          suggestedNextPrompt: revised.suggestedNextPrompt,
          questions: revised.questions
        });
        setSaved(`Saved revised pass ${conversationId}.${currentTurn}.5 at ${new Date().toLocaleTimeString()}`);
      } catch (error) {
        console.error(error);
        setSaved("Revised in the browser, but file save failed. Check the API server.");
      }
      setPasses([
        {
          id: `${conversationId}.${currentTurn}.5`,
          state: "prompt_revised",
          family: revised.family,
          summary: "Regenerated canonical output with clarification answers."
        },
        ...passes
      ]);
      setStatus("Revised prompt is ready. Review, copy, accept, or apply an optional critique.");
      setActiveTab("compose");
    }
  }

  async function finalizeWithCurrentAnswers() {
    setStatus("Generating the best prompt from the current answers...");
    setHasGenerated(true);
    const nextAnswers = { ...answers };
    for (const question of output.questions) {
      if (!nextAnswers[question.id]) nextAnswers[question.id] = ["Not specified"];
    }
    const revised = refinePrompt(input, role, showPrinciples, nextAnswers, activeModeConfig);
    setAnswers(nextAnswers);
    setOutput(revised);
    setQuestionIndex(0);
    setState("ready_for_acceptance");
    setManualStep(3);
    setAcceptanceInput("");
    const currentTurn = turnIndex.current;
    turnIndex.current += 1;
    try {
      await persistTurn(conversationId, {
        id: `${conversationId}.${currentTurn}.5`,
        role: "system",
        timestamp: now(),
        state: "prompt_revised",
        promptFamily: revised.family,
        pass: currentTurn + 1,
        content: makeSystemContent(revised),
        critiqueTemplate: revised.critiqueTemplate,
        canonicalPrompt: revised.canonicalPrompt,
        suggestedNextPrompt: revised.suggestedNextPrompt,
        questions: revised.questions
      });
      setSaved(`Saved final output ${conversationId}.${currentTurn}.5 at ${new Date().toLocaleTimeString()}`);
    } catch (error) {
      console.error(error);
      setSaved("Final prompt created in the browser, but file save failed. Check the API server.");
    }
    setPasses([
      {
        id: `${conversationId}.${currentTurn}.5`,
        state: "prompt_revised",
        family: revised.family,
        summary: "Generated final output from current answers."
      },
      ...passes
    ]);
    setStatus("Final prompt is ready. Copy it and paste it into your AI chat.");
    setActiveTab("compose");
  }

  function refineNextCanonicalPrompt() {
    setInput(output.nextCanonicalPrompt);
    setHasGenerated(true);
    const nextOutput = refinePrompt(output.nextCanonicalPrompt, role, showPrinciples, {}, activeModeConfig);
    setOutput(nextOutput);
    setQuestionIndex(0);
    setAnswers({});
    setState(nextOutput.questions.length ? "clarification_needed" : "ready_for_acceptance");
    setScratchConversation((current) => [
      {
        id: `${conversationId}.next.${Date.now()}`,
        title: "Next canonical prompt loaded for refinement",
        kind: "scratch",
        content: output.nextCanonicalPrompt
      },
      ...current
    ]);
    setStatus("Loaded the next prompt as the new canonical output to refine.");
    setActiveTab("compose");
    setManualStep(nextOutput.questions.length ? 2 : 3);
  }

  async function saveCurrentRole() {
    const roleToSave = role.trim() || output.advisorRole;
    const saved = await saveRole({
      name: roleToSave,
      role: roleToSave,
      family: output.family,
      source: role.trim() ? "custom" : "auto-inferred"
    });
    setSavedRoles((current) => [saved, ...current.filter((item) => item.id !== saved.id)]);
    setRoleSaveStatus(`Saved role: ${saved.name}`);
  }

  function useSavedRole(roleId: string) {
    const selected = savedRoles.find((item) => item.id === roleId);
    if (!selected) return;
    setRole(selected.role);
    const nextOutput = refinePrompt(input, selected.role, showPrinciples, answers, activeModeConfig);
    setOutput(nextOutput);
    setRoleSaveStatus(`Using saved role: ${selected.name}`);
  }

  function applyCritique() {
    if (!critique.trim()) {
      setStatus("Add critique text first, then apply it to the prompt.");
      return;
    }
    const refinedCritique = refineCritiqueText(critique);
    if (output.outputKind === "package") {
      const critiqueBlock: OutputBlock = {
        id: `critique_${Date.now()}`,
        type: "deep_dive",
        title: "Critique-Driven Package Update",
        summary: "Structured critique converted into package instructions.",
        content: refinedCritique,
        expanded: true,
        removable: true,
        regeneratable: true,
        askMoreEnabled: true,
        pinned: true,
        children: []
      };
      setOutput((current) => ({
        ...current,
        canonicalPackage: [...(current.canonicalPackage || []), critiqueBlock],
        state: "prompt_revised"
      }));
      setStructuredCritique(refinedCritique);
      setState("prompt_revised");
      setPromptDiffLines(diffPrompt(packageToText(output.canonicalPackage), packageToText([...(output.canonicalPackage || []), critiqueBlock])));
      setStatus("Critique accepted, structured, and added to the canonical package.");
      setManualStep(3);
      return;
    }
    const before = output.canonicalPrompt;
    const after = applyCritiqueToPrompt(before, refinedCritique);
    const revisedOutput: RefineryOutput = {
      ...output,
      canonicalPrompt: after,
      state: "prompt_revised",
      critiqueTemplate: output.critiqueTemplate
    };
    setHasGenerated(true);
    setOutput(revisedOutput);
    setStructuredCritique(refinedCritique);
    setState("prompt_revised");
    setPromptDiffLines(diffPrompt(before, after));
    setScratchConversation((current) => [
      {
        id: `${conversationId}.critique.${Date.now()}`,
        title: "Critique applied to prompt",
        kind: "critique",
        content: refinedCritique
      },
      ...current
    ]);
    setStatus("Critique accepted, structured, and applied to the canonical output.");
    setActiveTab("compose");
    setManualStep(3);
  }

  function checkAcceptance() {
    const unresolvedQuestions = canAccept ? 0 : openQuestions;
    const accepted = isAcceptedVerbatim(acceptanceInput, canonicalOutputText(output), unresolvedQuestions, critique);
    setState(accepted ? "accepted_verbatim" : critique.trim() ? "critique_received" : "prompt_draft_returned");
    if (accepted) setManualStep(5);
    const reasons = [];
    if (unresolvedQuestions > 0) reasons.push(`${unresolvedQuestions} clarification question${unresolvedQuestions === 1 ? "" : "s"} still open`);
    if (critique.trim()) reasons.push("critique box is not empty");
    if (acceptanceInput.trim() !== canonicalOutputText(output).trim()) reasons.push("pasted text does not exactly match the latest canonical output");
    setHandshakeResult(accepted ? "Accepted: exact match confirmed." : `Not accepted: ${reasons.join("; ")}.`);
    setStatus(
      accepted
        ? "Accepted. The exact-match check confirms the latest canonical output."
        : "Not verified yet. Exact-match verification requires no open questions, no critique, and matching prompt text."
    );
  }

  async function acceptCurrentPrompt() {
    if (!canAccept) {
      const message = `Not accepted: ${openQuestions} clarification question${openQuestions === 1 ? "" : "s"} still open.`;
      setHandshakeResult(message);
      setStatus(message);
      return;
    }
    setCritique("");
    setHasGenerated(true);
    const acceptedOutput = canonicalOutputText(output);
    setAcceptanceInput(acceptedOutput);
    setState("accepted_verbatim");
    setManualStep(5);
    setHandshakeResult("Accepted: current canonical output was inserted and matched exactly.");
    const acceptedPromptId = `${conversationId}.accepted.${Date.now()}`;
    const response = buildMockAcceptedResponse(output);
    setMainConversation((current) => [
      ...current,
      {
        id: `${acceptedPromptId}.prompt`,
        title: output.outputKind === "package" ? "Accepted canonical package" : "Accepted final prompt",
        kind: "prompt",
        content: acceptedOutput
      },
      {
        id: `${acceptedPromptId}.response`,
        title: "Generated response from accepted prompt",
        kind: "response",
        content: response
      }
    ]);
    try {
      const persisted = await persistAcceptedPrompt({
        conversationId,
        id: acceptedPromptId,
        family: output.family,
        role: output.advisorRole,
        prompt: acceptedOutput,
        response,
        nextAction: output.nextAction,
        nextPrompt: output.nextCanonicalPrompt
      });
      setStatus(`Accepted, run, and saved to ${persisted.path}.`);
      setActiveTab("accepted");
    } catch (error) {
      console.error(error);
      setStatus("Accepted and run in the UI, but saving the accepted prompt failed. Check the API server.");
    }
  }

  async function copyCanonicalPrompt() {
    try {
      await navigator.clipboard.writeText(canonicalOutputText(output));
      setCopyStatus("Copied. Paste it into Codex, ChatGPT, Gemini, or another AI chat.");
      setStatus(output.outputKind === "package" ? "Copied canonical package to clipboard." : "Copied final prompt to clipboard.");
    } catch (error) {
      console.error(error);
      setCopyStatus("Clipboard blocked. Select the canonical output text and copy it manually.");
    }
  }

  function updatePackageBlock(blockId: string, updater: (block: OutputBlock) => OutputBlock) {
    setOutput((current) => ({
      ...current,
      canonicalPackage: current.canonicalPackage?.map((block) => (block.id === blockId ? updater(block) : block))
    }));
  }

  function deletePackageBlock(blockId: string) {
    setOutput((current) => ({
      ...current,
      canonicalPackage: current.canonicalPackage?.filter((block) => block.id !== blockId || !block.removable)
    }));
    setStatus("Removed the block from the canonical package.");
  }

  function regeneratePackageBlock(blockId: string) {
    updatePackageBlock(blockId, (block) => ({
      ...block,
      content: [
        block.content,
        "",
        "Regenerated focus:",
        `Make this ${block.title.toLowerCase()} more specific, action-oriented, and aligned to the current request family.`
      ].join("\n")
    }));
    setStatus("Regenerated that block locally.");
  }

  function askMoreAboutBlock(blockId: string) {
    updatePackageBlock(blockId, (block) => ({
      ...block,
      expanded: true,
      children: [
        ...(block.children || []),
        {
          id: `${block.id}_deep_${Date.now()}`,
          type: "deep_dive",
          title: `Deep dive: ${block.title}`,
          summary: "Expansion prompt for this block.",
          content: `Expand only the "${block.title}" block. Explain hidden assumptions, risks, stronger alternatives, and the next concrete improvement.`,
          expanded: true,
          removable: true,
          regeneratable: true,
          askMoreEnabled: true,
          pinned: false,
          children: []
        }
      ]
    }));
    setStatus("Added a deeper follow-up under that block.");
  }

  function splitPackageBlock(blockId: string) {
    updatePackageBlock(blockId, (block) => {
      const lines = block.content
        .split(/\n+/)
        .map((line) => line.replace(/^[-*\d.\s]+/, "").trim())
        .filter(Boolean)
        .slice(0, 5);
      const children = lines.length ? lines : ["Clarify the goal", "Define the output", "Verify the result"];
      return {
        ...block,
        expanded: true,
        children: children.map((line, index) => ({
          id: `${block.id}_step_${index + 1}`,
          type: "step_plan",
          title: `Substep ${index + 1}`,
          summary: "Split from the parent block.",
          content: line,
          expanded: true,
          removable: true,
          regeneratable: true,
          askMoreEnabled: true,
          pinned: false,
          children: []
        }))
      };
    });
    setStatus("Split that block into substeps.");
  }

  function convertBlockToFollowUpPrompt(blockId: string) {
    const block = output.canonicalPackage?.find((item) => item.id === blockId);
    if (!block) return;
    const prompt = [
      `Expand this Prompt Refinery package block: ${block.title}`,
      "",
      "Current block content:",
      block.content,
      "",
      "Return a stronger version, missing assumptions, risks, and the next action that should update the final package."
    ].join("\n");
    setOutput((current) => ({ ...current, nextCanonicalPrompt: prompt }));
    setStatus("Converted that block into the next-pass prompt.");
  }

  function updateFewShotExample(exampleId: string, updater: (example: FewShotExample) => FewShotExample) {
    setOutput((current) => ({
      ...current,
      fewShotExamples: current.fewShotExamples.map((example) => (example.id === exampleId ? updater(example) : example))
    }));
  }

  function removeFewShotExample(exampleId: string) {
    setOutput((current) => ({
      ...current,
      fewShotExamples: current.fewShotExamples.filter((example) => example.id !== exampleId)
    }));
    setExampleStatus("Removed that example from this workflow.");
  }

  function regenerateFewShotExample(exampleId: string) {
    updateFewShotExample(exampleId, (example) => ({
      ...example,
      source: "generated",
      outputExample: `${example.outputExample}\n\nRegenerated emphasis: make this example more specific to ${output.familyLabel.toLowerCase()} and the current canonical output.`,
      whyItMatters: `${example.whyItMatters} This version is tuned to reduce ambiguity in the current workflow.`
    }));
    setExampleStatus("Regenerated that example locally.");
  }

  function addCustomFewShotExample() {
    const custom: FewShotExample = {
      id: `custom_example_${Date.now()}`,
      title: "Custom Example",
      purpose: "User-added example to steer the current output.",
      requestFamily: output.family,
      inputExample: "Paste or describe the kind of request this workflow should handle.",
      outputExample: "Describe the kind of answer, block, or prompt the product should produce.",
      whyItMatters: "This example lets the user override generic generated examples with their own pattern.",
      tags: ["custom", output.outputKind],
      source: "user_added",
      enabled: true,
      pinned: true,
      expanded: true
    };
    setOutput((current) => ({ ...current, fewShotExamples: [custom, ...current.fewShotExamples] }));
    setExampleStatus("Added a custom example.");
  }

  function usePinnedExamplesOnly() {
    setOutput((current) => ({
      ...current,
      fewShotExamples: current.fewShotExamples.map((example) => ({ ...example, enabled: example.pinned }))
    }));
    setExampleStatus("Using pinned examples only.");
  }

  function saveExamplesToProfile() {
    setWorkflowProfile((current) => ({
      ...current,
      requestFamily: output.family,
      savedExamples: output.fewShotExamples.filter((example) => example.pinned || example.enabled)
    }));
    setExampleStatus("Saved enabled and pinned examples to this workflow profile.");
  }

  function generatePromptFromExample(exampleId: string) {
    const example = output.fewShotExamples.find((item) => item.id === exampleId);
    if (!example) return;
    const prompt = [
      `Use this few-shot example to refine the current ${output.outputKind} output.`,
      "",
      `Request family: ${example.requestFamily}`,
      `Example title: ${example.title}`,
      `Purpose: ${example.purpose}`,
      "",
      "Input example:",
      example.inputExample,
      "",
      "Output example:",
      example.outputExample,
      "",
      "Update the canonical output so it follows the useful pattern from this example while preserving the user's actual goal."
    ].join("\n");
    setOutput((current) => ({ ...current, nextCanonicalPrompt: prompt }));
    setExampleStatus("Generated a next prompt from that example.");
  }

  function skipActiveQuestion() {
    void answerQuestion(["Skipped"]);
  }

  const visibleOpenQuestions = state === "clarification_needed" ? openQuestions : 0;
  const workflowStep: number =
    !modeConfirmed
      ? 0
      : !hasGenerated
      ? 1
      : state === "accepted_verbatim" || mainConversation.length
      ? 5
      : state === "clarification_needed" && activeQuestion
        ? 2
        : 3;
  const currentWizardStep = manualStep ?? workflowStep;
  const furthestWorkflowStep = Math.max(currentWizardStep, workflowStep);
  const completedSteps = new Set<number>();
  for (let step = 1; step < furthestWorkflowStep; step += 1) {
    if (canOpenWizardStep(step)) completedSteps.add(step);
  }
  if (modeConfirmed) completedSteps.add(0);
  function canOpenWizardStep(step: number) {
    if (step === 0) return true;
    if (!modeConfirmed) return false;
    if (step === 1) return true;
    if (step === 2) return hasGenerated;
    if (step === 3 || step === 4) return hasGenerated;
    return state === "accepted_verbatim" || mainConversation.length;
  }
  function goToWizardStep(step: number) {
    if (!canOpenWizardStep(step)) return;
    setManualStep(step);
  }
  const stepTitle =
    currentWizardStep === 0
      ? "choose output mode"
      : currentWizardStep === 1
      ? "write the goal"
      : currentWizardStep === 2
        ? "answer only what matters"
        : currentWizardStep === 3
          ? "read the canonical output"
          : currentWizardStep === 4
            ? "review, copy, or accept"
            : "use the next pass";
  const currentJob =
    currentWizardStep === 0
      ? "Choose whether this run should output a better prompt, a refined response, or a custom mode artifact."
      : currentWizardStep === 1
      ? "Describe the result you want. Prompt Refinery will classify the request and prepare one canonical output."
      : currentWizardStep === 2
        ? "Answer the visible question, skip it, or continue with best assumptions."
        : currentWizardStep === 3
          ? "Read the canonical output and examples. Edit anything that should become part of the source of truth."
        : currentWizardStep === 4
          ? "Review the prompt below, then copy it, accept it, or regenerate it."
          : "Use the accepted run below or make the next-pass prompt current.";
  const stateLabel = displayState(state, hasGenerated);
  const modeLabel = activeModeConfig.label;
  const generateLabel =
    selectedModeKind === "response_refinement" ? "Refine Response" : selectedModeKind === "custom" ? "Generate Output" : "Generate Prompt";
  const saveStatusText = `${roleSaveStatus} ${saved}`;
  const stepItems = [
    { id: 0, name: "Mode", detail: activeModeConfig.label },
    { id: 1, name: "Goal", detail: "Active now" },
    { id: 2, name: "Questions", detail: visibleOpenQuestions ? `${visibleOpenQuestions} open` : hasGenerated ? "Resolved" : "After goal" },
    { id: 3, name: "Canonical Output", detail: hasGenerated ? output.familyLabel : "Waiting" },
    { id: 4, name: "Review", detail: hasGenerated ? stateLabel : "Not ready" },
    { id: 5, name: "Next Pass", detail: mainConversation.length ? "Ready" : "After accept" }
  ];

  return (
    <main className="app-shell" data-theme={theme}>
      <header className="topbar">
        <div className="brand-lockup">
          <h1>Prompt Refinery</h1>
          <p>Turn rough intent into one canonical output.</p>
        </div>
        <div className="topbar-meta" aria-label="Current mode and step">
          <span><b>Mode</b>{modeLabel}</span>
          <span><b>Family</b>{output.familyLabel}</span>
          <span><b>Progress</b>{currentWizardStep === 0 ? "Mode setup" : `Step ${currentWizardStep} of 5`}</span>
          <button
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            type="button"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <section className="step-banner" aria-label="Workflow order">
        {stepItems.map((step) => {
          const isActive = step.id === currentWizardStep;
          const isDone = completedSteps.has(step.id) && !isActive;
          return (
            <button
              className={`flag-step ${isActive ? "active" : isDone ? "done" : "upcoming"}`}
              disabled={!canOpenWizardStep(step.id)}
              key={step.id}
              onClick={() => goToWizardStep(step.id)}
              type="button"
            >
              <span>{step.id}</span>
              <strong>{step.name}</strong>
              {isActive && <small>{step.detail}</small>}
            </button>
          );
        })}
      </section>

      <section className="workflow-status wizard-current" aria-label="Current workflow status">
        <div>
          <p className="eyebrow">Current step</p>
          <strong>{currentWizardStep === 0 ? "Preliminary step" : `Step ${currentWizardStep} of 5`}: {stepTitle}</strong>
        </div>
        <p>{currentJob}</p>
      </section>

      <section className="workflow-layout wizard-display">
        <aside className="workflow-rail" aria-label="Workflow steps">
          {stepItems.map((step) => (
            <div className={step.id === currentWizardStep ? "rail-step active" : step.id < currentWizardStep ? "rail-step done" : "rail-step"} key={step.id}>
              <span>{step.id}</span>
              <div>
                <strong>{step.name}</strong>
                <small>{step.detail}</small>
              </div>
            </div>
          ))}
        </aside>

        <section className="primary-flow wizard-stage">
          <section className={`panel mode-panel wizard-popup ${currentWizardStep === 0 ? "active" : ""}`}>
            <div className="workbench-header">
              <div className="section-title">
                <span>0</span>
                <div>
                  <p className="eyebrow">Mode</p>
                  <h2>Choose what the app should improve.</h2>
                </div>
              </div>
              <p>Start by choosing whether this run should create a better prompt, refine a response, or use a custom mode with fixed context.</p>
            </div>

            <div className="mode-grid" role="radiogroup" aria-label="Output mode">
              <button
                className={selectedModeKind === "prompt_output" ? "mode-card active" : "mode-card"}
                onClick={() => setSelectedModeKind("prompt_output")}
                type="button"
              >
                <strong>Prompt Output</strong>
                <span>Better AI input, canonical prompts, packages, next-pass prompts.</span>
              </button>
              <button
                className={selectedModeKind === "response_refinement" ? "mode-card active" : "mode-card"}
                onClick={() => setSelectedModeKind("response_refinement")}
                type="button"
              >
                <strong>Refined Response</strong>
                <span>Better human or AI-facing response, with tone, role, length, audience, and channel metadata.</span>
              </button>
              <button
                className={selectedModeKind === "custom" ? "mode-card active" : "mode-card"}
                onClick={() => setSelectedModeKind("custom")}
                type="button"
              >
                <strong>Custom Mode</strong>
                <span>Create a reusable mode like portfolio generation, project idea generator, or proposal package.</span>
              </button>
            </div>

            {selectedModeKind === "response_refinement" && (
              <div className="mode-settings">
                <label>
                  Tone
                  <input value={responseTone} onChange={(event) => setResponseTone(event.target.value)} />
                </label>
                <label>
                  Role
                  <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="Optional response advisor role" />
                </label>
                <label>
                  Length
                  <select value={responseLength} onChange={(event) => setResponseLength(event.target.value)}>
                    <option value="very short">Very short</option>
                    <option value="complete but concise">Complete but concise</option>
                    <option value="detailed and structured">Detailed and structured</option>
                    <option value="skimmable with bullets">Skimmable with bullets</option>
                  </select>
                </label>
                <label>
                  Audience
                  <input value={responseAudience} onChange={(event) => setResponseAudience(event.target.value)} />
                </label>
                <label>
                  Channel
                  <select value={responseChannel} onChange={(event) => setResponseChannel(event.target.value)}>
                    <option value="chat or message">Chat/message</option>
                    <option value="email">Email</option>
                    <option value="AI assistant response">AI response</option>
                    <option value="project update">Project update</option>
                  </select>
                </label>
              </div>
            )}

            {selectedModeKind === "custom" && (
              <div className="custom-mode-builder">
                <label>
                  Custom mode prompt
                  <textarea
                    value={customModeDraft}
                    onChange={(event) => setCustomModeDraft(event.target.value)}
                    placeholder="Describe the mode, fixed context, output criteria, and desired outcome."
                  />
                </label>
                <div className="button-row">
                  <button className="secondary compact" onClick={createCustomMode} type="button">
                    Create Mode
                  </button>
                  {customModes.length > 0 && (
                    <label className="saved-role-select">
                      Saved mode
                      <select value={activeCustomModeLabel} onChange={(event) => setActiveCustomModeLabel(event.target.value)}>
                        {customModes.map((mode) => (
                          <option key={mode.label} value={mode.label}>
                            {mode.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
                {selectedCustomMode && <p className="micro-status">Selected: {selectedCustomMode.description}</p>}
              </div>
            )}

            <div className="workbench-actions">
              <button className="primary compact" onClick={confirmModeSelection} type="button">
                Start
              </button>
            </div>
          </section>

          <section className={`panel hero-panel wizard-popup ${currentWizardStep === 1 ? "active" : ""}`}>
            <div className="workbench-header">
              <div className="section-title">
                <span>1</span>
                <div>
                  <p className="eyebrow">Goal</p>
                  <h2>{selectedModeKind === "response_refinement" ? "Paste the response to improve." : "Define the outcome."}</h2>
                </div>
              </div>
              <p>
                {selectedModeKind === "response_refinement"
                  ? "Paste a draft response, rough reply, or AI output. The system will reverse-engineer a stronger version."
                  : "Write the work you want finished. The system will turn it into a structured, editable output."}
              </p>
            </div>
            <label className="goal-field">
              <span>{selectedModeKind === "response_refinement" ? "Response draft" : "Intent"}</span>
              <textarea
                aria-label="Goal"
                className="goal-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={selectedModeKind === "response_refinement" ? "Paste the response or rough reply you want improved." : "Describe the result you want, not the prompt wording."}
              />
            </label>
            <div className="role-row">
              <label>
                Role
                <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="Auto-infer, or type your own" />
              </label>
              <div className="role-tools compact-tools" aria-label="Role tools">
                <button className="icon-action" onClick={saveCurrentRole} title="Save role" type="button">
                  Save role
                </button>
                <label className="saved-role-select">
                  Saved role
                  <select onChange={(event) => useSavedRole(event.target.value)} value="" aria-label="Saved roles">
                    <option value="" disabled>
                      Choose role
                    </option>
                    {savedRoles.map((savedRole) => (
                      <option key={savedRole.id} value={savedRole.id}>
                        {savedRole.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="workbench-actions">
              <button className="primary compact" onClick={runRefinery} type="button">
                {generateLabel}
              </button>
              <button className="secondary compact" onClick={finalizeWithCurrentAnswers} type="button">
                Continue Without Questions
              </button>
            </div>
            <p className="micro-status">{saveStatusText}</p>
          </section>

          {!hasGenerated ? (
            <section className={`panel quiet-panel compact-state wizard-popup ${currentWizardStep === 2 ? "active" : ""}`}>
              <div className="empty-row">
                <div>
                  <p className="eyebrow">Questions</p>
                  <h2>No question is needed yet.</h2>
                </div>
                <span>Normal state</span>
              </div>
              <p className="muted">After the goal is generated, only useful clarifying questions appear here.</p>
            </section>
          ) : activeQuestion && state === "clarification_needed" ? (
            <section className={`panel attention-panel wizard-popup ${currentWizardStep === 2 ? "active" : ""}`}>
              <div className="section-title">
                <span>2</span>
                <div>
                  <p className="eyebrow">Questions</p>
                  <h2>One useful question before the prompt is final.</h2>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <QuestionCard
                  key={activeQuestion.id}
                  question={activeQuestion}
                  onAnswer={answerQuestion}
                  onSkip={skipActiveQuestion}
                  onBestAssumption={finalizeWithCurrentAnswers}
                />
              </AnimatePresence>
            </section>
          ) : (
            <section className={`panel quiet-panel wizard-popup ${currentWizardStep === 2 ? "active" : ""}`}>
              <p className="eyebrow">Questions</p>
              <h2>No blocking question.</h2>
              <p className="muted">The prompt can be reviewed, edited, copied, or accepted now.</p>
            </section>
          )}

          <section className={`panel canonical-panel wizard-popup ${currentWizardStep === 3 ? "active" : ""}`}>
            <div className="source-header">
              <div>
                <p className="eyebrow">Canonical Output</p>
                <h2>This is the source of truth.</h2>
              </div>
              <div className="badge-row" aria-label="Prompt metadata">
                <span>{output.familyLabel}</span>
                <span>{modeLabel}</span>
                <span>{stateLabel}</span>
                <span>{output.advisorRole}</span>
              </div>
            </div>
            {hasGenerated ? (
              <>
                <p className="compact-summary">{output.refinedUnderstanding}</p>
                {output.outputKind === "package" ? (
                  <div className="package-blocks">
                    {(output.canonicalPackage || []).map((block) => (
                      <OutputBlockCard
                        block={block}
                        key={block.id}
                        onAskMore={() => askMoreAboutBlock(block.id)}
                        onConvertToPrompt={() => convertBlockToFollowUpPrompt(block.id)}
                        onDelete={() => deletePackageBlock(block.id)}
                        onRegenerate={() => regeneratePackageBlock(block.id)}
                        onSplit={() => splitPackageBlock(block.id)}
                        onUpdate={(updatedBlock) => updatePackageBlock(block.id, () => updatedBlock)}
                      />
                    ))}
                  </div>
                ) : (
                  <EditableTextBox
                    onChange={(canonicalPrompt) => setOutput((current) => ({ ...current, canonicalPrompt }))}
                    text={output.canonicalPrompt}
                  />
                )}
                <div className="primary-actions sticky-actions">
                  <button className="primary compact" onClick={copyCanonicalPrompt} type="button">
                    Copy
                  </button>
                  <button className="primary compact" onClick={acceptCurrentPrompt} type="button">
                    Accept Prompt
                  </button>
                  <button className="secondary compact" onClick={finalizeWithCurrentAnswers} type="button">
                    Regenerate
                  </button>
                </div>
                <p className="micro-status success">{copyStatus}</p>
              </>
            ) : (
              <div className="empty-state">
                <strong>Canonical output is waiting.</strong>
                <p>Generate Prompt will create the editable source of truth for this request.</p>
                <div className="empty-meta">
                  <span>{modeLabel}</span>
                  <span>{output.familyLabel}</span>
                  <span>{stateLabel}</span>
                </div>
              </div>
            )}
          </section>

          {hasGenerated && currentWizardStep === 3 && (
            <section className="panel examples-panel canonical-subpanel">
              <details open={!workflowProfile.collapseExamplesByDefault}>
                <summary>
                  <span>Few-Shot Examples</span>
                  <small>{output.fewShotExamples.filter((example) => example.enabled).length} active examples shaping this output</small>
                </summary>
                <div className="example-toolbar">
                  <button className="secondary compact" onClick={addCustomFewShotExample} type="button">
                    Add Example
                  </button>
                  <button className="secondary compact" onClick={usePinnedExamplesOnly} type="button">
                    Use Pinned Only
                  </button>
                  <button className="secondary compact" onClick={saveExamplesToProfile} type="button">
                    Save Profile
                  </button>
                </div>
                <div className="profile-settings" aria-label="Workflow profile example settings">
                  <label>
                    <input
                      checked={workflowProfile.autoGenerateExamples}
                      onChange={(event) =>
                        setWorkflowProfile((current) => ({ ...current, autoGenerateExamples: event.target.checked }))
                      }
                      type="checkbox"
                    />
                    Auto-generate
                  </label>
                  <label>
                    <input
                      checked={workflowProfile.useSavedExampleSetByDefault}
                      onChange={(event) =>
                        setWorkflowProfile((current) => ({ ...current, useSavedExampleSetByDefault: event.target.checked }))
                      }
                      type="checkbox"
                    />
                    Use saved set
                  </label>
                  <label>
                    <input
                      checked={workflowProfile.allowUserEditedExamplesOverride}
                      onChange={(event) =>
                        setWorkflowProfile((current) => ({ ...current, allowUserEditedExamplesOverride: event.target.checked }))
                      }
                      type="checkbox"
                    />
                    User edits override
                  </label>
                  <label>
                    Count
                    <input
                      min={1}
                      max={6}
                      type="number"
                      value={workflowProfile.defaultExampleCount}
                      onChange={(event) =>
                        setWorkflowProfile((current) => ({
                          ...current,
                          defaultExampleCount: Number(event.target.value)
                        }))
                      }
                    />
                  </label>
                  <label>
                    Strictness
                    <select
                      value={workflowProfile.exampleStrictness}
                      onChange={(event) =>
                        setWorkflowProfile((current) => ({
                          ...current,
                          exampleStrictness: event.target.value as WorkflowProfile["exampleStrictness"]
                        }))
                      }
                    >
                      <option value="strict">Strict</option>
                      <option value="balanced">Balanced</option>
                      <option value="diverse">Diverse</option>
                    </select>
                  </label>
                </div>
                <p className="micro-status">{exampleStatus}</p>
                <div className="example-list">
                  {output.fewShotExamples.map((example) => (
                    <FewShotExampleCard
                      example={example}
                      key={example.id}
                      onGeneratePrompt={() => generatePromptFromExample(example.id)}
                      onRegenerate={() => regenerateFewShotExample(example.id)}
                      onRemove={() => removeFewShotExample(example.id)}
                      onUpdate={(updatedExample) => updateFewShotExample(example.id, () => updatedExample)}
                    />
                  ))}
                </div>
              </details>
            </section>
          )}

          {hasGenerated && (
          <section className={`${mainConversation.length ? "panel next-pass-panel" : "panel next-pass-panel future-panel"} wizard-popup ${currentWizardStep === 5 ? "active" : ""}`}>
            <div className="section-title">
              <span>5</span>
              <div>
                <p className="eyebrow">Next Action</p>
                <h2>{output.nextAction}</h2>
              </div>
            </div>
            <p>{output.nextActionReason}</p>
            <small>Thinking ahead: {output.actionAfterNext}</small>
            <details className="inline-details">
              <summary>Show other options</summary>
              <ul className="plain-info-list">
                {output.nextActionOptions.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </details>
            <details className="inline-details">
              <summary>Show next-pass prompt</summary>
              <EditableTextBox
                onChange={(nextCanonicalPrompt) => setOutput((current) => ({ ...current, nextCanonicalPrompt }))}
                text={output.nextCanonicalPrompt}
              />
            </details>
            {mainConversation.length > 0 && (
              <button className="secondary compact" onClick={refineNextCanonicalPrompt} type="button">
                Make Next Pass Current
              </button>
            )}
          </section>
          )}

          {mainConversation.length > 0 && (
          <section className={`panel accepted-panel wizard-popup ${currentWizardStep === 5 ? "active" : ""}`}>
            <div className="section-title">
              <span>4</span>
              <div>
                <p className="eyebrow">Accepted Runs</p>
                <h2>Only accepted prompts and their generated responses appear here.</h2>
              </div>
            </div>
            <div className="conversation-lane main-lane">
              {mainConversation.map((entry) => (
                  <article className={`conversation-entry ${entry.kind}`} key={entry.id}>
                    <strong>{entry.title}</strong>
                    <EditableTextBox text={entry.content} />
                  </article>
                ))}
            </div>
          </section>
          )}
        </section>

        <aside className={`support-drawer wizard-popup ${currentWizardStep === 4 ? "active" : ""}`}>
          <div className="utility-group-label">
            <span>Secondary tools</span>
            <small>Use when the prompt needs review, history, or advanced context.</small>
          </div>
          <details className="drawer-card">
            <summary>Critique Mode</summary>
            <p className="muted">Optional review tools. Use these only when the current prompt needs a directed change.</p>
            <h3>Critique Suggestions</h3>
            <EditableTextBox text={output.critiqueTemplate} />
            <h3>Your critique</h3>
            <textarea
              className="critique-input"
              value={critique}
              onChange={(event) => setCritique(event.target.value)}
              placeholder="Type any critique. Example: make this more specific, reduce back-and-forth, add file outputs, tighten the next action."
            />
            <div className="button-row">
              <button className="secondary compact" onClick={applyCritique} type="button">
                Apply Critique
              </button>
            </div>
            <details className="inline-details">
              <summary>Advanced exact-match verification</summary>
              <p className="muted">Optional. Use this only when you need to confirm pasted text matches the latest canonical output exactly.</p>
              <textarea
                value={acceptanceInput}
                onChange={(event) => setAcceptanceInput(event.target.value)}
                placeholder="Paste prompt here to verify exact match"
              />
              <button className="secondary compact" onClick={checkAcceptance} type="button">
                Verify Exact Match
              </button>
              <div className={state === "accepted_verbatim" ? "handshake-result accepted" : "handshake-result"}>
                {handshakeResult}
              </div>
            </details>
            {structuredCritique && (
              <>
                <h3>Structured critique</h3>
                <EditableTextBox text={structuredCritique} />
              </>
            )}
            <h3>Prompt Diff</h3>
            <PromptDiff lines={promptDiffLines} />
          </details>

          <details className="drawer-card">
            <summary>Details</summary>
            <h3>Expected response</h3>
            <EditableTextBox
              onChange={(responseBlueprint) => setOutput((current) => ({ ...current, responseBlueprint }))}
              text={output.responseBlueprint}
            />
            <h3>Defined steps</h3>
            <ol className="step-list compact-list">
              {output.actionSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h3>Scenario prompts</h3>
            <ul className="plain-info-list">
              {output.scenarioPrompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
            <h3>Expansion prompts</h3>
            <ul className="plain-info-list">
              {output.expansionPrompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
            <h3>Few-shot influence</h3>
            <ul className="plain-info-list">
              <li>{output.fewShotExamples.filter((example) => example.enabled).length} enabled examples shape copied output, critique context, and next-pass prompts.</li>
              <li>{workflowProfile.savedExamples.length} examples are saved in the current workflow profile.</li>
            </ul>
          </details>

          <details className="drawer-card">
            <summary>History</summary>
            <div className="conversation-lane scratch-lane">
              {scratchConversation.length ? (
                scratchConversation.map((entry) => (
                  <article className={`conversation-entry ${entry.kind}`} key={entry.id}>
                    <strong>{entry.title}</strong>
                    <EditableTextBox text={entry.content} />
                  </article>
                ))
              ) : (
                <p className="muted">Drafts, clarification answers, and critiques appear here.</p>
              )}
            </div>
            <h3>Prompt passes</h3>
            <div className="pass-list">
              {passes.length ? (
                passes.map((pass) => (
                  <div className="pass-item" key={pass.id}>
                    <strong>{pass.id}</strong>
                    <span>{pass.state}</span>
                    <p>{pass.summary}</p>
                  </div>
                ))
              ) : (
                <p className="muted">No saved passes yet.</p>
              )}
            </div>
          </details>

          <details className="drawer-card">
            <summary>Advanced Tools</summary>
            <label className="toggle">
              <input
                checked={showPrinciples}
                onChange={(event) => setShowPrinciples(event.target.checked)}
                type="checkbox"
              />
              Show principle explanations
            </label>
            <h3>Prompt categories</h3>
            <dl className="compact-meta">
              {familyOrder.map((family) => (
                <div className={family === output.family ? "compact-meta-row active" : "compact-meta-row"} key={family}>
                  <dt>{promptFamilies[family].label}</dt>
                  <dd>{promptFamilies[family].use}</dd>
                </div>
              ))}
            </dl>
            <button className="secondary wide" onClick={() => setAdvancedOpen((current) => !current)} type="button">
              {advancedOpen ? "Hide metadata" : "Show metadata"}
            </button>
            {advancedOpen && (
              <div className="advanced-panel">
                <h3>Registry</h3>
                <ul className="file-list">
                  <li>conversations/0000/0000_conversation.md</li>
                  <li>conversations/0000/turns/</li>
                  <li>conversations/0000/critiques/</li>
                  <li>conversations/0000/canonical_prompts/</li>
                  <li>prompt_library/{output.family}/template_v1.md</li>
                  <li>session_log/0000_session.md</li>
                </ul>
                <h3>Specifications</h3>
                <ul className="compact-text-list">
                  {output.specificationChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>Chatbot metadata</h3>
                <ul className="compact-text-list">
                  {output.chatbotMetadata.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>Best-practice checks</h3>
                {output.bestPracticeChecks.map((item) => (
                  <p className="check" key={item}>{item}</p>
                ))}
              </div>
            )}
            <h3>Flow map</h3>
            <div className="mini-flow" aria-label="Prompt workflow map">
              {stepItems.map((step, index) => (
                <div className="mini-flow-step" key={step.id}>
                  <span>{step.name}</span>
                  {index < stepItems.length - 1 && <b aria-hidden="true">→</b>}
                </div>
              ))}
            </div>
            {showPrinciples && (
              <div className="principles compact-principles">
                {output.principles.map((principle) => (
                  <article key={principle}>
                    <strong>{principle.split(":")[0]}</strong>
                    <p>{principle.includes(":") ? principle.split(":").slice(1).join(":").trim() : principle}</p>
                  </article>
                ))}
                {output.costNotes.map((note) => (
                  <article key={note}>
                    <strong>Cost control</strong>
                    <p>{note}</p>
                  </article>
                ))}
              </div>
            )}
          </details>
        </aside>
      </section>
      <div className="bottom-action-bar" aria-label="Primary workflow actions">
        <div>
          <strong>{stateLabel}</strong>
          <span>{currentJob}</span>
        </div>
        <div className="bottom-actions">
          {currentWizardStep === 0 ? (
            <button className="primary compact" onClick={confirmModeSelection} type="button">
              Start
            </button>
          ) : currentWizardStep === 1 ? (
            <button className="primary compact" onClick={runRefinery} type="button">
              {generateLabel}
            </button>
          ) : currentWizardStep === 2 ? (
            <button className="primary compact" onClick={finalizeWithCurrentAnswers} type="button">
              Continue Without Questions
            </button>
          ) : currentWizardStep === 3 ? (
            <>
              <button className="secondary compact" onClick={copyCanonicalPrompt} type="button">
                Copy
              </button>
              <button className="primary compact" onClick={() => setManualStep(4)} type="button">
                Review
              </button>
            </>
          ) : currentWizardStep === 4 ? (
            <>
              <button className="secondary compact" onClick={() => setManualStep(3)} type="button">
                Output
              </button>
              <button className="primary compact" onClick={acceptCurrentPrompt} type="button">
                Accept Prompt
              </button>
            </>
          ) : (
            <>
              <button className="secondary compact" onClick={() => setManualStep(3)} type="button">
                Output
              </button>
              <button className="primary compact" onClick={refineNextCanonicalPrompt} type="button">
                Refine Next
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );

  /*
  return (
    <main className="app-shell">
      <header className="topbar">
        <h1>Prompt Refinery</h1>
        <p>Turn a rough goal into a better AI prompt</p>
      </header>

      <nav className="tabbar" aria-label="Prompt Refinery modes">
        <button className={activeTab === "compose" ? "tab active" : "tab"} onClick={() => setActiveTab("compose")} type="button">
          Compose
        </button>
        <button className={activeTab === "refine" ? "tab active" : "tab"} onClick={() => setActiveTab("refine")} type="button">
          Refine
        </button>
        <button className={activeTab === "accepted" ? "tab active" : "tab"} onClick={() => setActiveTab("accepted")} type="button">
          Accepted
        </button>
        <button className={activeTab === "advanced" ? "tab active" : "tab"} onClick={() => setActiveTab("advanced")} type="button">
          Advanced
        </button>
      </nav>

      <section className={`workspace tab-workspace ${activeTab}`}>
        <aside className={activeTab === "compose" ? "panel input-panel" : "panel input-panel tab-hidden"}>
          <div className="panel-heading">
            <span>1</span>
            <h2>Intake - Write goal</h2>
          </div>
          <textarea value={input} onChange={(event) => setInput(event.target.value)} />
          <label>
            Role
            <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="Auto-infer, or type your own" />
          </label>
          <div className="role-tools compact-tools" aria-label="Role tools">
            <button className="icon-action" onClick={saveCurrentRole} title="Save role" type="button">
              <span aria-hidden="true">💾</span>
              <span>Save</span>
            </button>
            <select onChange={(event) => useSavedRole(event.target.value)} value="">
              <option value="" disabled>
                My roles
              </option>
              {savedRoles.map((savedRole) => (
                <option key={savedRole.id} value={savedRole.id}>
                  {savedRole.name}
                </option>
              ))}
            </select>
            <p className="micro-status">{roleSaveStatus}</p>
          </div>
          <label className="toggle">
            <input
              checked={showPrinciples}
              onChange={(event) => setShowPrinciples(event.target.checked)}
              type="checkbox"
            />
            Show prompt principle explanations
          </label>
          <button className="primary" onClick={runRefinery} type="button">
            Refine
          </button>
          <button className="secondary wide" onClick={finalizeWithCurrentAnswers} type="button">
            Final
          </button>
          <p className="micro-status">{saved}</p>
          <p className="status-line">{status}</p>
        </aside>

        <section className={activeTab === "compose" || activeTab === "accepted" ? `panel output-panel ${activeTab}` : "panel output-panel tab-hidden"}>
          <div className="panel-heading">
            <span>2</span>
            <h2>{activeTab === "accepted" ? "Accepted - Prompt and response lane" : "Prompt - Copy prompt"}</h2>
          </div>
          <div className="meta-grid">
            <div>
              <p className="eyebrow">Family</p>
              <strong>{output.familyLabel}</strong>
            </div>
            <div>
              <p className="eyebrow">State</p>
              <strong>{state}</strong>
            </div>
            <div>
              <p className="eyebrow">Role</p>
              <strong>{output.advisorRole}</strong>
            </div>
          </div>
          <p className="family-description">{output.familyDescription}</p>
          <h3>Refined Understanding</h3>
          <p className="compact-summary">{output.refinedUnderstanding}</p>
          <h3>Final Prompt To Copy</h3>
          <EditableTextBox
            onChange={(canonicalPrompt) => setOutput((current) => ({ ...current, canonicalPrompt }))}
            text={output.canonicalPrompt}
          />
          <h3>Expected Response Blueprint</h3>
          <EditableTextBox
            onChange={(responseBlueprint) => setOutput((current) => ({ ...current, responseBlueprint }))}
            text={output.responseBlueprint}
          />
          <h3>Next Action To Take</h3>
          <div className="next-action-panel">
            <strong>{output.nextAction}</strong>
            <p>{output.nextActionReason}</p>
            <span>Thinking ahead: {output.actionAfterNext}</span>
          </div>
          <h3>Next Action Options</h3>
          <ul className="plain-info-list">
            {output.nextActionOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <h3>Prompt To Give Back After That Action</h3>
          <EditableTextBox
            onChange={(nextCanonicalPrompt) => setOutput((current) => ({ ...current, nextCanonicalPrompt }))}
            text={output.nextCanonicalPrompt}
          />
          <div className="button-row">
            <button className="secondary compact" onClick={refineNextCanonicalPrompt} type="button">
              Next
            </button>
          </div>
          <h3 className="accepted-only">Main Accepted Prompt Conversation</h3>
          <div className="conversation-lane main-lane accepted-only">
            {mainConversation.length ? (
              mainConversation.map((entry) => (
                <article className={`conversation-entry ${entry.kind}`} key={entry.id}>
                  <strong>{entry.title}</strong>
                  <EditableTextBox text={entry.content} />
                </article>
              ))
            ) : (
              <p className="muted">Press Accept current canonical prompt to append the final prompt and generated response here.</p>
            )}
          </div>
          <button className="ghost-toggle" onClick={() => setDetailsOpen((current) => !current)} type="button">
            {detailsOpen ? "Hide prompt details" : "Show prompt details"}
          </button>
          {detailsOpen && (
            <div className="detail-panel">
              <h3>Defined Steps Included</h3>
              <ol className="step-list compact-list">
                {output.actionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <h3>Scenario Follow-up Prompts</h3>
              <ul className="plain-info-list">
                {output.scenarioPrompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
              <h3>Expandable Explanation Prompts</h3>
              <ul className="plain-info-list expansion-list">
                {output.expansionPrompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="button-row">
            <button className="primary compact" onClick={copyCanonicalPrompt} type="button">
              Copy
            </button>
            <button className="secondary" onClick={finalizeWithCurrentAnswers} type="button">
              Regen
            </button>
          </div>
          <p className="micro-status success">{copyStatus}</p>
          <div className="suggested">{output.suggestedNextPrompt}</div>
          <h3>Prompt Passes</h3>
          <div className="pass-list">
            {passes.length ? (
              passes.map((pass) => (
                <div className="pass-item" key={pass.id}>
                  <strong>{pass.id}</strong>
                  <span>{pass.state}</span>
                  <p>{pass.summary}</p>
                </div>
              ))
            ) : (
              <p className="muted">No saved passes yet.</p>
            )}
          </div>
        </section>

        <aside className={activeTab === "advanced" ? "panel file-panel" : "panel file-panel tab-hidden"}>
          <div className="panel-heading">
            <span>3</span>
            <h2>Advanced - Tune metadata</h2>
          </div>
          <button className="secondary wide" onClick={() => setAdvancedOpen((current) => !current)} type="button">
            {advancedOpen ? "Collapse" : "Expand"}
          </button>
          {(advancedOpen || activeTab === "advanced") && (
            <div className="advanced-panel">
              <h3>Registry</h3>
              <ul className="file-list">
                <li>conversations/0000/0000_conversation.md</li>
                <li>conversations/0000/turns/</li>
                <li>conversations/0000/critiques/</li>
                <li>conversations/0000/canonical_prompts/</li>
                <li>prompt_library/{output.family}/template_v1.md</li>
                <li>session_log/0000_session.md</li>
              </ul>
              <h3>Prompt categories</h3>
              <dl className="compact-meta">
                {familyOrder.map((family) => (
                  <div className={family === output.family ? "compact-meta-row active" : "compact-meta-row"} key={family}>
                    <dt>{promptFamilies[family].label}</dt>
                    <dd>{promptFamilies[family].use}</dd>
                  </div>
                ))}
              </dl>
              <h3>Specifications to be specific about</h3>
              <ul className="compact-text-list">
                {output.specificationChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>AI chatbot metadata</h3>
              <ul className="compact-text-list">
                {output.chatbotMetadata.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Best-practice checks</h3>
              {output.bestPracticeChecks.map((item) => (
                <p className="check" key={item}>{item}</p>
              ))}
            </div>
          )}
        </aside>
      </section>

      <section className={activeTab === "refine" ? "lower-grid" : "lower-grid tab-hidden"}>
        <div className="panel questionnaire">
          <AnimatePresence mode="wait">
            {activeQuestion && state === "clarification_needed" ? (
              <QuestionCard
                key={activeQuestion.id}
                question={activeQuestion}
                onAnswer={answerQuestion}
                onSkip={skipActiveQuestion}
                onBestAssumption={finalizeWithCurrentAnswers}
              />
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="eyebrow">Clarification</p>
                <h2>No active question</h2>
                <p className="muted">The prompt is ready for critique or acceptance.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="panel critique-panel">
          <p className="eyebrow">Scratch refinement conversation</p>
          <h2>Clarify - Answer or skip</h2>
          <div className="conversation-lane scratch-lane">
            {scratchConversation.length ? (
              scratchConversation.map((entry) => (
                <article className={`conversation-entry ${entry.kind}`} key={entry.id}>
                  <strong>{entry.title}</strong>
                  <EditableTextBox text={entry.content} />
                </article>
              ))
            ) : (
              <p className="muted">Drafts, clarification answers, and critiques appear here.</p>
            )}
          </div>
          <h3>Optional critique questions</h3>
          <EditableTextBox text={output.critiqueTemplate} />
          <h3>Open critique input</h3>
          <textarea
            className="critique-input"
            value={critique}
            onChange={(event) => setCritique(event.target.value)}
            placeholder="Type any critique here. Example: make this more specific, remove the extra explanation, add a saved artifact requirement, make the next action clearer..."
          />
          <button className="secondary wide" onClick={applyCritique} type="button">
            Apply
          </button>
          {structuredCritique && (
            <>
              <h3>Structured critique sent forward</h3>
              <EditableTextBox text={structuredCritique} />
            </>
          )}
          <h3>Prompt Diff</h3>
          <PromptDiff lines={promptDiffLines} />
          <textarea
            value={acceptanceInput}
            onChange={(event) => setAcceptanceInput(event.target.value)}
            placeholder="Paste canonical prompt verbatim here to accept"
          />
          <div className={state === "accepted_verbatim" ? "handshake-result accepted" : "handshake-result"}>
            {handshakeResult}
          </div>
          <div className="button-row">
            <button className="secondary" onClick={checkAcceptance} type="button">
              Check
            </button>
            <button className="primary compact" onClick={acceptCurrentPrompt} type="button">
              Accept + Run
            </button>
          </div>
        </div>

        <div className="panel map-panel">
          <p className="eyebrow">Flow map</p>
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </section>

      {showPrinciples && (
        <section className="principles">
          {output.principles.map((principle) => (
            <article key={principle}>
              <strong>{principle.split(":")[0]}</strong>
              <p>{principle.includes(":") ? principle.split(":").slice(1).join(":").trim() : principle}</p>
            </article>
          ))}
          {output.costNotes.map((note) => (
            <article key={note}>
              <strong>Cost control</strong>
              <p>{note}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
  */
}
