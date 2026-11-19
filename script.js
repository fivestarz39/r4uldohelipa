(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('is-open');
      });
    });
  }

  const dialog = document.querySelector('.lightbox');
  if (dialog) {
    const dialogImage = dialog.querySelector('img');
    const dialogCaption = dialog.querySelector('p');
    const closeButton = dialog.querySelector('.lightbox-close');

    document.querySelectorAll('[data-lightbox]').forEach((item) => {
      item.addEventListener('click', () => {
        dialogImage.src = item.dataset.lightbox;
        dialogImage.alt = item.querySelector('img')?.alt || '';
        dialogCaption.textContent = item.dataset.caption || '';
        dialog.showModal();
      });
    });

    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => { dialogImage.src = ''; });
  }
})();
