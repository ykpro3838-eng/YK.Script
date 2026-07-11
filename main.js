// Nebula — interactions légères, sans dépendance externe

document.addEventListener('DOMContentLoaded', () => {

  // Copier la commande d'installation
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copié !';
      } catch (err) {
        btn.textContent = 'Ctrl+C';
      }
      setTimeout(() => { btn.textContent = original; }, 1800);
    });
  });

  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
});
