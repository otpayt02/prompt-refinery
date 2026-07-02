import { useMemo, useState } from "react";
import { builtInModeTemplates, duplicateBuiltInMode, type ModeTemplateRecord } from "../domain/modeTemplates";

interface ModeManagerProps {
  activeModeId?: string;
  onActivate?: (mode: ModeTemplateRecord) => void;
  onDuplicate?: (mode: ModeTemplateRecord) => void;
}

export function ModeManager({ activeModeId, onActivate, onDuplicate }: ModeManagerProps) {
  const [customModes, setCustomModes] = useState<ModeTemplateRecord[]>([]);
  const [selectedTab, setSelectedTab] = useState<"built_in" | "custom">("built_in");
  const modes = selectedTab === "built_in" ? builtInModeTemplates : customModes;
  const selectedMode = useMemo(() => modes.find((mode) => mode.id === activeModeId) || modes[0], [activeModeId, modes]);

  function duplicateMode(mode: ModeTemplateRecord) {
    if (!mode.copyable) return;
    const copy = duplicateBuiltInMode(mode);
    setCustomModes((current) => [copy, ...current]);
    setSelectedTab("custom");
    onDuplicate?.(copy);
  }

  return (
    <section className="mode-manager" aria-label="Mode manager">
      <div className="panel-heading split-heading">
        <div>
          <p className="eyebrow">Mode Manager</p>
          <h2>Choose, copy, or customize operating modes.</h2>
        </div>
        <div className="mode-tabs" role="tablist" aria-label="Mode manager tabs">
          <button className={selectedTab === "built_in" ? "mini-action active" : "mini-action"} onClick={() => setSelectedTab("built_in")} type="button">
            Built-in
          </button>
          <button className={selectedTab === "custom" ? "mini-action active" : "mini-action"} onClick={() => setSelectedTab("custom")} type="button">
            Custom ({customModes.length})
          </button>
        </div>
      </div>

      <div className="mode-manager-grid">
        <div className="mode-list" role="list">
          {modes.length ? (
            modes.map((mode) => (
              <button
                className={selectedMode?.id === mode.id ? "mode-row active" : "mode-row"}
                key={mode.id}
                onClick={() => onActivate?.(mode)}
                type="button"
              >
                <strong>{mode.displayName}</strong>
                <span>{mode.status === "built_in" ? "Locked built-in" : "Editable custom"}</span>
              </button>
            ))
          ) : (
            <div className="empty-mode-list">
              <strong>No custom modes yet.</strong>
              <p>Duplicate a built-in mode to create an editable custom mode.</p>
            </div>
          )}
        </div>

        {selectedMode && (
          <article className="mode-detail-card">
            <div className="mode-detail-header">
              <div>
                <p className="eyebrow">{selectedMode.status.replace("_", " ")}</p>
                <h3>{selectedMode.displayName}</h3>
              </div>
              <span>{selectedMode.mutable ? "Editable" : "Locked"}</span>
            </div>
            <p>{selectedMode.description}</p>
            <dl className="mode-policy-list">
              <div>
                <dt>Default family</dt>
                <dd>{selectedMode.defaultPromptFamily}</dd>
              </div>
              <div>
                <dt>Token policy</dt>
                <dd>{selectedMode.tokenPolicy}</dd>
              </div>
              <div>
                <dt>Scope policy</dt>
                <dd>{selectedMode.scopePolicy}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>{selectedMode.sourcePath}</dd>
              </div>
            </dl>
            <div className="mode-instructions">
              <strong>Operating rules</strong>
              <ul>
                {selectedMode.instructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
            </div>
            <div className="button-row">
              <button className="primary compact" onClick={() => onActivate?.(selectedMode)} type="button">
                Activate mode
              </button>
              {selectedMode.copyable && selectedMode.status === "built_in" && (
                <button className="secondary compact" onClick={() => duplicateMode(selectedMode)} type="button">
                  Duplicate to Custom
                </button>
              )}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
