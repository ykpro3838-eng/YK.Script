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

  // Boutique — génère les cartes produit à partir de assets/js/products.js
  // Pour ajouter un produit : modifier uniquement le tableau `products` dans products.js
  const shopGrid = document.getElementById('shop-grid');
  if (shopGrid && typeof products !== 'undefined') {
    shopGrid.innerHTML = products.map((p) => `
      <div class="shop-card">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="shop-content">
          <span class="shop-title">${p.name}</span>
          <span class="shop-price">${p.price}</span>
          <p class="shop-desc">${p.description}</p>
          <a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">Acheter</a>
        </div>
      </div>
    `).join('');
  }
});
