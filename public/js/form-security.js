const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const MULTI_WHITESPACE = /\s+/g;

export const FORM_LIMITS = {
  nameMaxLength: 80,
  messageMaxLength: 2000,
  minSubmitIntervalMs: 60_000,
};

export function sanitizeSingleLine(value, maxLength) {
  return value
    .replace(CONTROL_CHARS, '')
    .replace(/[\r\n\t]/g, ' ')
    .replace(MULTI_WHITESPACE, ' ')
    .trim()
    .slice(0, maxLength);
}

export function sanitizeMultiline(value, maxLength) {
  return value
    .replace(CONTROL_CHARS, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, maxLength);
}

export function isHoneypotTriggered(value) {
  return Boolean(value && value.trim().length > 0);
}

export function canSubmitForm(storageKey, minIntervalMs) {
  const lastSubmit = window.localStorage.getItem(storageKey);
  if (!lastSubmit) return true;

  const elapsed = Date.now() - Number(lastSubmit);
  return !Number.isFinite(elapsed) || elapsed >= minIntervalMs;
}

export function markFormSubmitted(storageKey) {
  window.localStorage.setItem(storageKey, String(Date.now()));
}

export function buildMailtoUrl(email, subject, body) {
  const params = new URLSearchParams({
    subject: sanitizeSingleLine(subject, 120),
    body: sanitizeMultiline(body, FORM_LIMITS.messageMaxLength + 200),
  });

  return `mailto:${email}?${params.toString()}`;
}
