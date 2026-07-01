import type { TurnPayload } from "../domain/types";

export interface SavedRole {
  id: string;
  name: string;
  role: string;
  family: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export async function scaffoldWorkspace(): Promise<void> {
  await fetch("/api/scaffold", { method: "POST" });
}

export async function persistTurn(
  conversationId: string,
  turn: TurnPayload & {
    critiqueTemplate?: string;
    canonicalPrompt?: string;
    suggestedNextPrompt?: string;
    questions?: unknown[];
  }
): Promise<void> {
  await fetch("/api/turns", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ conversationId, turn })
  });
}

export async function persistClarificationAnswer(
  conversationId: string,
  questionId: string,
  answers: string[]
): Promise<void> {
  await fetch("/api/clarifications/answer", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ conversationId, questionId, answers })
  });
}

export async function getProviderStatus(): Promise<{
  defaultProvider: string;
  geminiAvailable: boolean;
  paidOpenAiRequired: boolean;
}> {
  const response = await fetch("/api/provider");
  return response.json();
}

export async function getSavedRoles(): Promise<SavedRole[]> {
  const response = await fetch("/api/roles");
  const data = await response.json();
  return data.roles || [];
}

export async function saveRole(role: {
  name: string;
  role: string;
  family: string;
  source: string;
}): Promise<SavedRole> {
  const response = await fetch("/api/roles", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ role })
  });
  const data = await response.json();
  return data.role;
}

export async function persistAcceptedPrompt(payload: {
  conversationId: string;
  id: string;
  family: string;
  role: string;
  prompt: string;
  response: string;
  nextAction: string;
  nextPrompt: string;
}): Promise<{ ok: boolean; id: string; path: string }> {
  const response = await fetch("/api/accepted-prompts", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  return response.json();
}

export async function generateProviderDraft(prompt: string): Promise<{
  provider: string;
  text: string;
  note: string;
}> {
  const response = await fetch("/api/ai/generate", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ prompt })
  });
  return response.json();
}
