import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '../../data/site';

interface Props {
  currentPath?: string;
}

export default function MobileNav({ currentPath = '/' }: Props) {
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-cream-dark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="/"
          className="font-script text-2xl text-terracotta hover:text-terracotta-light transition-colors"
        >
          {site.name}
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive(link.href)
                    ? 'text-terracotta'
                    : 'text-charcoal-light hover:text-terracotta'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.phoneHref}
              className="inline-flex items-center px-5 py-2 rounded-full bg-terracotta text-white text-sm font-semibold hover:bg-terracotta-light transition-colors"
            >
              {site.phone}
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 text-charcoal hover:text-terracotta transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-cream-dark/60 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                isActive(link.href)
                  ? 'text-terracotta'
                  : 'text-charcoal-light hover:text-terracotta'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="block text-center px-5 py-3 mt-3 rounded-full bg-terracotta text-white text-sm font-semibold hover:bg-terracotta-light transition-colors"
            onClick={() => setOpen(false)}
          >
            {site.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
