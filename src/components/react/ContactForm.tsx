import { useState } from 'react';
import { Send, CheckCircle, ShieldAlert } from 'lucide-react';
import { site } from '../../data/site';
import {
  FORM_LIMITS,
  buildMailtoUrl,
  canSubmitForm,
  isHoneypotTriggered,
  markFormSubmitted,
  sanitizeMultiline,
  sanitizeSingleLine,
} from '../../lib/security/form';

const RATE_LIMIT_KEY = 'parenthese-repit:last-contact-submit';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    if (isHoneypotTriggered(data.get('company') as string | null)) {
      setSubmitted(true);
      return;
    }

    if (!canSubmitForm(RATE_LIMIT_KEY, FORM_LIMITS.minSubmitIntervalMs)) {
      setError('Merci d’attendre une minute avant un nouvel envoi.');
      return;
    }

    const name = sanitizeSingleLine(String(data.get('name') ?? ''), FORM_LIMITS.nameMaxLength);
    const message = sanitizeMultiline(
      String(data.get('message') ?? ''),
      FORM_LIMITS.messageMaxLength
    );

    if (name.length < 2) {
      setError('Veuillez indiquer votre nom (2 caractères minimum).');
      return;
    }

    if (message.length < 10) {
      setError('Votre message est trop court (10 caractères minimum).');
      return;
    }

    const subject = `Demande de contact — ${name}`;
    const body = `Bonjour Audrey,\n\nJe m'appelle ${name}.\n\n${message}\n\nCordialement,\n${name}`;

    markFormSubmitted(RATE_LIMIT_KEY);
    window.location.href = buildMailtoUrl(site.email, subject, body);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle className="text-sage" size={40} />
        <p className="font-semibold text-charcoal">Votre client mail va s&apos;ouvrir.</p>
        <p className="text-sm text-charcoal-light">
          Si rien ne s&apos;ouvre, écrivez directement à{' '}
          <a href={site.emailHref} className="text-terracotta underline">
            {site.email}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-terracotta hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="company">Ne pas remplir</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <div
          className="flex items-start gap-2 rounded-xl border border-terracotta/30 bg-terracotta/10 px-4 py-3 text-sm text-charcoal"
          role="alert"
        >
          <ShieldAlert size={18} className="mt-0.5 shrink-0 text-terracotta" />
          <p>{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1">
          Votre nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={FORM_LIMITS.nameMaxLength}
          autoComplete="name"
          spellCheck={false}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white/80 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-terracotta/40 transition-shadow"
          placeholder="Prénom et nom"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={FORM_LIMITS.messageMaxLength}
          rows={4}
          autoComplete="off"
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white/80 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-terracotta/40 transition-shadow resize-none"
          placeholder="Décrivez vos besoins..."
        />
        <p className="mt-1 text-xs text-charcoal-light">
          Maximum {FORM_LIMITS.messageMaxLength} caractères.
        </p>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-white font-semibold hover:bg-terracotta-light transition-colors"
      >
        <Send size={18} />
        Envoyer un message
      </button>
    </form>
  );
}
