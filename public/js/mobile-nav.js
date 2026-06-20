function initMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const openBtn = document.getElementById('mobile-menu-open');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  if (!menu || !openBtn || !closeBtn || !backdrop || menu.dataset.ready === 'true') return;
  menu.dataset.ready = 'true';

  let closeTimer;

  function openMenu() {
    window.clearTimeout(closeTimer);
    menu.removeAttribute('hidden');
    menu.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-menu-open');
    requestAnimationFrame(() => menu.classList.add('is-visible'));
  }

  function closeMenu() {
    menu.classList.remove('is-visible');
    openBtn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mobile-menu-open');

    closeTimer = window.setTimeout(() => {
      menu.setAttribute('hidden', '');
    }, 320);
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  menu.querySelectorAll('.mobile-menu__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-visible')) {
      closeMenu();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}
