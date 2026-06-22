import {
  FORM_LIMITS,
  buildMailtoUrl,
  canSubmitForm,
  isHoneypotTriggered,
  markFormSubmitted,
  sanitizeMultiline,
  sanitizeSingleLine,
} from './form-security.js';

const RATE_LIMIT_KEY = 'parenthese-repit:last-contact-submit';
const CONTACT_EMAIL = 'audreydeom@hotmail.fr';

function formatOptional(value) {
  return value || 'Non précisé';
}

function initContactForm() {
  const root = document.getElementById('contact-form-root');
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-form-success');
  const errorBox = document.getElementById('contact-form-error');
  const errorText = document.getElementById('contact-form-error-text');
  const resetBtn = document.getElementById('contact-form-reset');

  if (!root || !form || !success || !errorBox || !errorText || !resetBtn || root.dataset.ready === 'true') {
    return;
  }

  root.dataset.ready = 'true';

  function showError(message) {
    errorText.textContent = message;
    errorBox.classList.remove('hidden');
    errorBox.classList.add('flex');
  }

  function hideError() {
    errorBox.classList.add('hidden');
    errorBox.classList.remove('flex');
    errorText.textContent = '';
  }

  function showSuccess() {
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.classList.add('flex');
  }

  function showForm() {
    hideError();
    form.reset();
    form.classList.remove('hidden');
    success.classList.add('hidden');
    success.classList.remove('flex');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    hideError();

    const data = new FormData(form);

    if (isHoneypotTriggered(data.get('company'))) {
      showSuccess();
      return;
    }

    if (!canSubmitForm(RATE_LIMIT_KEY, FORM_LIMITS.minSubmitIntervalMs)) {
      showError('Merci d’attendre une minute avant un nouvel envoi.');
      return;
    }

    const name = sanitizeSingleLine(String(data.get('name') ?? ''), FORM_LIMITS.nameMaxLength);
    const phone = sanitizeSingleLine(String(data.get('phone') ?? ''), FORM_LIMITS.phoneMaxLength);
    const commune = sanitizeSingleLine(String(data.get('commune') ?? ''), FORM_LIMITS.communeMaxLength);
    const need = sanitizeSingleLine(String(data.get('need') ?? ''), 120);
    const profile = sanitizeSingleLine(String(data.get('profile') ?? ''), 80);
    const frequency = sanitizeSingleLine(String(data.get('frequency') ?? ''), 80);
    const schedule = sanitizeSingleLine(String(data.get('schedule') ?? ''), 80);
    const message = sanitizeMultiline(String(data.get('message') ?? ''), FORM_LIMITS.messageMaxLength);

    if (name.length < 2) {
      showError('Veuillez indiquer votre nom (2 caractères minimum).');
      return;
    }

    if (!need) {
      showError('Veuillez sélectionner un besoin principal.');
      return;
    }

    const subject = `Demande — ${need} — ${name}`;
    const body = [
      'Bonjour Audrey,',
      '',
      `Je m'appelle ${name}.`,
      `Téléphone : ${phone || 'Non renseigné'}`,
      `Commune : ${commune || 'Non renseignée'}`,
      '',
      '--- Contexte de la prise en charge ---',
      `Besoin principal : ${need}`,
      `Profil concerné : ${formatOptional(profile)}`,
      `Fréquence souhaitée : ${formatOptional(frequency)}`,
      `Créneau souhaité : ${formatOptional(schedule)}`,
      '',
      '--- Précisions complémentaires ---',
      message || 'Aucune précision supplémentaire.',
      '',
      `Cordialement,`,
      name,
    ].join('\n');

    markFormSubmitted(RATE_LIMIT_KEY);
    window.location.href = buildMailtoUrl(CONTACT_EMAIL, subject, body);
    showSuccess();
  });

  resetBtn.addEventListener('click', showForm);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForm);
} else {
  initContactForm();
}
