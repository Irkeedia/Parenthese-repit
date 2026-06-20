import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const message = data.get('message') as string;
    const subject = encodeURIComponent(`Demande de contact — ${name}`);
    const body = encodeURIComponent(
      `Bonjour Audrey,\n\nJe m'appelle ${name}.\n\n${message}\n\nCordialement,\n${name}`
    );
    window.location.href = `mailto:audreydeom@hotmail.fr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle className="text-sage" size={40} />
        <p className="font-semibold text-charcoal">Votre client mail va s'ouvrir.</p>
        <p className="text-sm text-charcoal-light">
          Si rien ne s'ouvre, écrivez directement à{' '}
          <a href="mailto:audreydeom@hotmail.fr" className="text-terracotta underline">
            audreydeom@hotmail.fr
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1">
          Votre nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
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
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white/80 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-terracotta/40 transition-shadow resize-none"
          placeholder="Décrivez vos besoins..."
        />
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
