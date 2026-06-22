/**
 * Shared client-side security helpers for user-generated content.
 */

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const MULTI_WHITESPACE = /\s+/g;

export const FORM_LIMITS = {
  nameMaxLength: 80,
  phoneMaxLength: 30,
  communeMaxLength: 80,
  messageMaxLength: 2000,
  emailBodyMaxLength: 3500,
  minSubmitIntervalMs: 60_000,
} as const;

export function sanitizeSingleLine(value: string, maxLength: number): string {
  return value
    .replace(CONTROL_CHARS, '')
    .replace(/[\r\n\t]/g, ' ')
    .replace(MULTI_WHITESPACE, ' ')
    .trim()
    .slice(0, maxLength);
}

export function sanitizeMultiline(value: string, maxLength: number): string {
  return value
    .replace(CONTROL_CHARS, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, maxLength);
}

export function isHoneypotTriggered(value: string | null | undefined): boolean {
  return Boolean(value && value.trim().length > 0);
}

export function canSubmitForm(storageKey: string, minIntervalMs: number): boolean {
  if (typeof window === 'undefined') return true;

  const lastSubmit = window.localStorage.getItem(storageKey);
  if (!lastSubmit) return true;

  const elapsed = Date.now() - Number(lastSubmit);
  return !Number.isFinite(elapsed) || elapsed >= minIntervalMs;
}

export function markFormSubmitted(storageKey: string): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(storageKey, String(Date.now()));
}

export function buildMailtoUrl(
  email: string,
  subject: string,
  body: string
): string {
  const params = new URLSearchParams({
    subject: sanitizeSingleLine(subject, 120),
    body: sanitizeMultiline(body, FORM_LIMITS.emailBodyMaxLength),
  });

  return `mailto:${email}?${params.toString()}`;
}
