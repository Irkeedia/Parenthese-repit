import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { navLinks, site } from '../../data/site';

interface Props {
  currentPath?: string;
}

const MENU_DURATION_MS = 320;

export default function MobileNav({ currentPath = '/' }: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  function isActive(href: string) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  function openMenu() {
    setVisible(true);
    requestAnimationFrame(() => setOpen(true));
  }

  function closeMenu() {
    setOpen(false);
    window.setTimeout(() => setVisible(false), MENU_DURATION_MS);
  }

  function toggleMenu() {
    if (open) closeMenu();
    else openMenu();
  }

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu();
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible]);

  return (
    <>
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
            onClick={toggleMenu}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {visible && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <button
            type="button"
            className={`absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
            aria-label="Fermer le menu"
          />

          <div
            className={`absolute inset-0 flex flex-col bg-cream transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-cream-dark/60 shrink-0">
              <a
                href="/"
                className="font-script text-2xl text-terracotta"
                onClick={closeMenu}
              >
                {site.name}
              </a>
              <button
                type="button"
                className={`p-2 rounded-full text-charcoal hover:text-terracotta hover:bg-cream-dark/60 transition-all duration-300 ${
                  open ? 'rotate-0 scale-100' : 'rotate-90 scale-75 opacity-0'
                }`}
                onClick={closeMenu}
                aria-label="Fermer le menu"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-8 overflow-y-auto">
              <p
                className={`text-xs font-bold uppercase tracking-[0.3em] text-terracotta mb-8 transition-all duration-300 delay-75 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                Navigation
              </p>

              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className={`transition-all duration-300 ease-out ${
                      open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}
                    style={{ transitionDelay: open ? `${120 + index * 50}ms` : '0ms' }}
                  >
                    <a
                      href={link.href}
                      className={`block py-3 text-2xl sm:text-3xl font-semibold tracking-wide transition-colors ${
                        isActive(link.href)
                          ? 'text-terracotta'
                          : 'text-charcoal hover:text-terracotta'
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`px-6 sm:px-10 pb-10 pt-4 border-t border-cream-dark/60 shrink-0 transition-all duration-300 delay-150 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full bg-terracotta text-white font-semibold hover:bg-terracotta-light transition-colors"
                onClick={closeMenu}
              >
                <Phone size={20} />
                {site.phone}
              </a>
              <p className="text-center text-sm text-charcoal-light mt-4">{site.tagline}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
