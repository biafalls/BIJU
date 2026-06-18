const products = [
  {
    name: 'Bolo de Aniversário',
    category: 'Bolos de festa',
    price: 'R$ 95,00',
    emoji: '🎂',
    description: 'Cobertura cremosa, detalhes em chantilly e frutas frescas.'
  },
  {
    name: 'Docinhos de Coco',
    category: 'Docinhos',
    price: 'R$ 18,00',
    emoji: '🥥',
    description: 'Tradicionais e delicados, perfeitos para festas e lembrancinhas.'
  },
  {
    name: 'Fatia de Bolo',
    category: 'Fatias',
    price: 'R$ 12,00',
    emoji: '🍰',
    description: 'Porção individual com sabores irresistíveis e cobertura suave.'
  },
  {
    name: 'Brigadeiro Gourmet',
    category: 'Doces',
    price: 'R$ 4,50',
    emoji: '🍫',
    description: 'Chocolate com uma textura cremosa e acabamento especial.'
  },
  {
    name: 'Cupcake de Morango',
    category: 'Doces',
    price: 'R$ 7,00',
    emoji: '🧁',
    description: 'Mini bolo com cobertura doce e morangos fresquinhos.'
  },
  {
    name: 'Torta de Limão',
    category: 'Sobremesas',
    price: 'R$ 35,00',
    emoji: '🍋',
    description: 'Leve, refrescante e ideal para qualquer comemoração.'
  }
];

const productGrid = document.getElementById('productGrid');

function renderProducts() {
  productGrid.innerHTML = '';

  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">${product.emoji}</div>
      <div class="product-content">
        <span class="badge">${product.category}</span>
        <h3 style="margin-top: 12px;">${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <span class="price">${product.price}</span>
          <button class="btn btn-primary">Peça agora</button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem('biju-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('biju-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('open');
  }
});

renderProducts();
