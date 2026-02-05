// ========== PRODUCT DATABASE ==========
const products = [
  // Gà & Phụ Phẩm
  {
    id: 1,
    name: "Chân Gà Rút Xương",
    category: "chicken",
    price: 38000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598694932816-b6a9f2b4e6f4?w=400&h=400&fit=crop",
    description: "Chân gà rút xương sạch sẽ, dễ chế biến. Phần thịt mềm, thơm ngon."
  },
  {
    id: 2,
    name: "Cánh Gà",
    category: "chicken",
    price: 55000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1535143464509-0ff2b1db0af1?w=400&h=400&fit=crop",
    description: "Cánh gà tươi mới, giàu collagen, bổ dưỡng."
  },
  {
    id: 3,
    name: "Đùi Gà Không Xương",
    category: "chicken",
    price: 65000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561c1d?w=400&h=400&fit=crop",
    description: "Đùi gà không xương, thịt nạc, dễ chế biến."
  },
  
  // Hải Sản
  {
    id: 5,
    name: "Tôm Sú Đông Lạnh",
    category: "seafood",
    price: 180000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1585518419759-924a22cbbdcd?w=400&h=400&fit=crop",
    description: "Tôm sú tươi ngon, hạn chế hóa chất, chất lượng cao."
  },
  {
    id: 6,
    name: "Cá Basa Cắt Miếng",
    category: "seafood",
    price: 85000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1504674900941-0026eb2dd72a?w=400&h=400&fit=crop",
    description: "Cá basa cắt miếng, sạch sẽ, dễ chế biến."
  },
  {
    id: 7,
    name: "Mực Ống Đông Lạnh",
    category: "seafood",
    price: 95000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1563727882582-e4c4e6a4f75f?w=400&h=400&fit=crop",
    description: "Mực ống tươi, thơm ngon, thích hợp nướng hoặc xào."
  },
  {
    id: 8,
    name: "Cầu Gai Đông Lạnh",
    category: "seafood",
    price: 120000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    description: "Cầu gai tươi ngon, giàu dinh dưỡng, giá cạnh tranh."
  },

  // Thịt Bò
  {
    id: 9,
    name: "Bò Thăn Ngoại",
    category: "beef",
    price: 220000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1600503453965-51782abbad48?w=400&h=400&fit=crop",
    description: "Bò thăn ngoại, thịt mềm, thích hợp nướng, nấu lẩu."
  },
  {
    id: 10,
    name: "Bò Dăm Bông",
    category: "beef",
    price: 195000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561c1d?w=400&h=400&fit=crop",
    description: "Bò dăm bông chất lượng, tiện sử dụng."
  },
  {
    id: 11,
    name: "Bò Nạc Vai",
    category: "beef",
    price: 185000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=400&fit=crop",
    description: "Bò nạc vai, thích hợp nấu canh, kho."
  },
  {
    id: 12,
    name: "Bò Xào Chiên",
    category: "beef",
    price: 210000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
    description: "Bò xào chiên, cắt sẵn, tiện sử dụng."
  },

  // Thịt Lợn
  {
    id: 13,
    name: "Thịt Lợn Nạc",
    category: "pork",
    price: 95000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    description: "Thịt lợn nạc tươi, sạch sẽ, thơm ngon."
  },
  {
    id: 14,
    name: "Thịt Lợn Ba Chỉ",
    category: "pork",
    price: 105000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1599599810694-b3b3efac9b6a?w=400&h=400&fit=crop",
    description: "Thịt lợn ba chỉ, thích hợp nấu canh, nấu thịt kho."
  },
  {
    id: 15,
    name: "Xương Lợn Nước",
    category: "pork",
    price: 35000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1618164436241-92473e06ab40?w=400&h=400&fit=crop",
    description: "Xương lợn nước, nấu canh, nấu súp rất ngon."
  },
  {
    id: 16,
    name: "Xúc Xích",
    category: "pork",
    price: 75000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561c1d?w=400&h=400&fit=crop",
    description: "Xúc xích chất lượng, tiện sử dụng."
  },

  // Rau Củ
  {
    id: 17,
    name: "Rau Bó Xôi Đông Lạnh",
    category: "vegetables",
    price: 25000,
    unit: "bó",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    description: "Rau bó xôi sạch sẽ, đông lạnh bảo quản."
  },
  {
    id: 18,
    name: "Nước Xốt Thịt",
    category: "vegetables",
    price: 15000,
    unit: "gói",
    image: "https://images.unsplash.com/photo-1596040709011-fcf7b0f39a02?w=400&h=400&fit=crop",
    description: "Nước xốt thịt tiện sử dụng."
  }
];

// ========== SHOPPING CART ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';

// ========== DOM ELEMENTS ==========
const productList = document.getElementById('productList');
const categoryButtons = document.querySelectorAll('.category-btn');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const cartCount = document.getElementById('cartCount');
const closeButtons = document.querySelectorAll('.close');

// ========== DISPLAY PRODUCTS ==========
function displayProducts(productsToShow = products) {
  productList.innerHTML = productsToShow.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/250?text=${encodeURIComponent(product.name)}'">
      </div>
      <div class="product-card-info">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price.toLocaleString('vi-VN')}</p>
        <span class="product-unit">/${product.unit}</span>
        <p class="product-description">${product.description}</p>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-shopping-cart"></i> Thêm
          </button>
          <button class="btn-quantity" onclick="viewProduct(${product.id})" title="Xem chi tiết">
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ========== CATEGORY FILTER ==========
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    
    if (currentCategory === 'all') {
      displayProducts(products);
    } else {
      displayProducts(products.filter(p => p.category === currentCategory));
    }
  });
});

// ========== ADD TO CART ==========
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  showNotification(`Đã thêm ${product.name} vào giỏ hàng`, 'success');
}

// ========== REMOVE FROM CART ==========
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  displayCart();
}

// ========== UPDATE QUANTITY ==========
function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      displayCart();
    }
  }
}

// ========== DISPLAY CART ==========
function displayCart() {
  const cartItems = document.getElementById('cartItems');
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-message"><i class="fa-solid fa-shopping-bag"></i><p>Giỏ hàng trống</p></div>';
    document.querySelector('.btn-checkout').style.display = 'none';
    return;
  }

  document.querySelector('.btn-checkout').style.display = 'block';

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString('vi-VN')} đ/${item.unit}</div>
      </div>
      <div class="cart-item-quantity">
        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
        <input type="text" class="qty-input" value="${item.quantity}" readonly>
        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Xóa</button>
    </div>
  `).join('');

  updateCartTotal();
}

// ========== UPDATE CART TOTAL ==========
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('cartTotal').textContent = total.toLocaleString('vi-VN') + ' đ';
}

// ========== UPDATE CART COUNT ==========
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
  cartCount.style.display = count > 0 ? 'flex' : 'none';
}

// ========== SAVE CART TO STORAGE ==========
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ========== SEARCH FUNCTIONALITY ==========
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  
  if (query.length === 0) {
    searchResults.innerHTML = '';
    return;
  }

  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query)
  );

  searchResults.innerHTML = results.map(product => `
    <div class="search-item" onclick="viewProduct(${product.id})">
      <strong>${product.name}</strong> - ${product.price.toLocaleString('vi-VN')} đ/${product.unit}
    </div>
  `).join('');
});

// ========== MODAL CONTROLS ==========
cartBtn.addEventListener('click', () => {
  displayCart();
  cartModal.classList.add('show');
});

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('show');
  searchInput.focus();
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal');
    if (modal) {
      modal.classList.remove('show');
    }
  });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('show');
  }
});

// ========== VIEW PRODUCT DETAIL ==========
function viewProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  alert(`${product.name}\n\nGiá: ${product.price.toLocaleString('vi-VN')} đ/${product.unit}\n\n${product.description}\n\nHãy gọi hoặc nhắn tin để đặt hàng!`);
}

// ========== NOTIFICATION ==========
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type} show`;
  notification.innerHTML = `
    <div class="notification-content">
      <span id="notificationMessage">${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========== CHECKOUT ==========
document.querySelector('.btn-checkout').addEventListener('click', () => {
  if (cart.length === 0) return;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemText = cart.map(item => `${item.name} x${item.quantity}`).join('\n');
  
  const message = `Tôi muốn đặt hàng:\n\n${itemText}\n\nTổng tiền: ${total.toLocaleString('vi-VN')} đ`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=0989865054&text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank');
});

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  updateCartCount();

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
    }
  });

  // Add scroll animations
  observeElements();
  
  // Add smooth scroll for anchor links
  setupSmoothScroll();
});

// ========== SCROLL ANIMATIONS ==========
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .benefit-item, .testimonial-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// ========== SMOOTH SCROLL ==========
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
      }
    });
  });
}
