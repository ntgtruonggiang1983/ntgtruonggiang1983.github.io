// Dữ liệu sản phẩm
const products = {
  'canh-ga': {
    name: 'Cánh Gà Đông Lạnh',
    image: 'images/canh ga.JPG',
    gallery: [
      'images/canh ga.JPG',
      'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    description: 'Cánh gà tươi ngon, được đông lạnh nhanh chóng để bảo quản chất lượng tự nhiên. Thích hợp nướng, chiên, kho, nấu canh hoặc làm đùi để ăn kèm cơm.',
    price: '45.000 đ',
    pricePerUnit: '45.000 đ/kg',
    unit: 'kg',
    note: 'Giá có thể thay đổi tùy theo số lượng mua. Vui lòng liên hệ để biết giá sỉ.'
  },
  'dui-ga': {
    name: 'Đùi Gà Đông Lạnh',
    image: 'images/dui ga.JPG',
    gallery: [
      'images/dui ga.JPG',
      'https://images.unsplash.com/photo-1585238341710-4dd0ddf3de5e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1585238341710-4dd0ddf3de5e?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    description: 'Đùi gà nguyên con hoặc cắt thành từng phần, chất lượng tuyệt vời. Màu sắc tự nhiên, không có chất bảo quản. Lý tưởng cho các món gà kho, gà hấp, hoặc nướng ngoài trời.',
    price: '52.000 đ',
    pricePerUnit: '52.000 đ/kg',
    unit: 'kg',
    note: 'Tất cả sản phẩm được kiểm tra chất lượng kỹ lưỡng trước khi gửi đi.'
  },
  'chan-ga': {
    name: 'Chân Gà Rút Xương',
    image: 'https://images.unsplash.com/photo-1598694932816-b6a9f2b4e6f4?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1598694932816-b6a9f2b4e6f4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1598694932816-b6a9f2b4e6f4?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    description: 'Chân gà rút xương sạch sẽ, dễ chế biến. Phần thịt mềm, thơm ngon. Thường được sử dụng để nấu canh, súp, gà kho hoặc chiên giòn.',
    price: '38.000 đ',
    pricePerUnit: '38.000 đ/kg',
    unit: 'kg',
    note: 'Đối với đơn hàng lớn (trên 50kg), chúng tôi có giá ưu đãi đặc biệt.'
  },
  'vien-bo-ca': {
    name: 'Bò Viên & Cá Viên Đông Lạnh',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    description: 'Bò viên và cá viên chất lượng cao, được chế biến từ thịt tươi ngon. Sản phẩm này rất phổ biến cho những quán ăn, nhà hàng, hoặc nấu nướng tại nhà. Nấu canh, lẩu hoặc chiên đều ngon.',
    price: '55.000 đ',
    pricePerUnit: '55.000 đ/kg',
    unit: 'kg',
    note: 'Có các loại bò viên và cá viên khác nhau. Vui lòng gọi để biết thêm chi tiết.'
  },
  'cua-bien': {
    name: 'Cua Biển Đông Lạnh',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1615141207179-7c4517e76bfb?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599599810694-b3a7dd64d54b?w=400&h=300&fit=crop'
    ],
    description: 'Cua biển đông lạnh tươi ngon, chất lượng cao. Thịt cua mềm, ngọt, giàu dinh dưỡng. Thích hợp nấu canh, hấp, nướng hoặc ăn sống. Được đông lạnh nhanh chóng để bảo quản độ tươi và chất lượng tự nhiên của sản phẩm.',
    price: '280.000 đ',
    pricePerUnit: '280.000 đ/kg',
    unit: 'kg',
    note: 'Cua biển là hải sản cao cấp, giàu protein và canxi. Vui lòng liên hệ để được tư vấn về các loại cua khác nhau và giá sỉ.'
  },
  'khac': {
    name: 'Thực Phẩm Đông Lạnh Khác',
    image: 'https://images.unsplash.com/photo-1599599810694-b3a7dd64d54b?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599599810694-b3a7dd64d54b?w=400&h=300&fit=crop'
    ],
    description: 'Chúng tôi cung cấp nhiều loại thực phẩm đông lạnh khác ngoài các sản phẩm chính. Bao gồm các loại hải sản, thịt lợn, thịt bò, rau quả đông lạnh, và nhiều sản phẩm khác.',
    price: 'Liên hệ',
    pricePerUnit: 'Tùy theo sản phẩm',
    unit: 'Varies',
    note: 'Liên hệ ngay để biết danh sách đầy đủ và giá cụ thể của các sản phẩm khác.'
  },
  'de-canh': {
    name: 'Dế Cánh Đông Lạnh',
    image: 'https://images.unsplash.com/photo-1597624046017-85e9cd4cbf53?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1597624046017-85e9cd4cbf53?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1597624046017-85e9cd4cbf53?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    description: 'Dế cánh đông lạnh tươi ngon, bổ dưỡng cao. Là thực phẩm giàu protein, hợp lý cho các loài vật nuôi hoặc có thể sử dụng trong nấu ăn. Được làm lạnh nhanh chóng để giữ tươi mới và chất lượng tự nhiên.',
    price: '75.000 đ',
    pricePerUnit: '75.000 đ/kg',
    unit: 'kg',
    note: 'Dế cánh là thực phẩm cao cấp, rất tốt cho sức khỏe. Đảm bảo vệ sinh an toàn thực phẩm.'
  },
  'de-sua': {
    name: 'Dế Sữa Đông Lạnh',
    image: 'https://images.unsplash.com/photo-1571407614862-ec05e298e0d7?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571407614862-ec05e298e0d7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571407614862-ec05e298e0d7?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    description: 'Dế sữa đông lạnh - một sản phẩm đặc biệt, giàu dinh dưỡng và protein. Đây là lựa chọn tuyệt vời cho các nhà hàng cao cấp, quán ăn chuyên biệt hoặc những người yêu thích các loại thực phẩm hiếm. Được đông lạnh nhanh chóng để bảo quản độ tươi.',
    price: '95.000 đ',
    pricePerUnit: '95.000 đ/kg',
    unit: 'kg',
    note: 'Sản phẩm này cần được đặt hàng trước. Vui lòng liên hệ để xác nhận có sẵn.'
  }
};

// Lấy các phần tử DOM
const productModal = document.getElementById('productModal');
const orderModal = document.getElementById('orderModal');
const productCards = document.querySelectorAll('.product-card');
const modalClose = document.querySelector('.modal-close');
const contactBtn = document.getElementById('contactBtn');
const productImg = document.getElementById('productImg');
const imageNav = document.getElementById('imageNav');
const orderForm = document.getElementById('orderForm');
const cancelOrderBtn = document.getElementById('cancelOrderBtn');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const notificationClose = document.querySelector('.notification-close');

let currentProductId = null;
let currentImageIndex = 0;

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
  updateOrderBadge();
  updateCartBadge();
  setupOrdersModal();
  setupCartModal();
});

// Mở modal khi click vào sản phẩm
productCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = card.getAttribute('data-product');
    const product = products[productId];
    
    if (product) {
      currentProductId = productId;
      currentImageIndex = 0;
      displayProduct(product);
      productModal.classList.add('active');
      productModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Đóng modal khi click vào nút close
modalClose.addEventListener('click', closeModal);

// Đóng modal khi click ra ngoài content
productModal.addEventListener('click', (e) => {
  if (e.target === productModal) {
    closeModal();
  }
});

// Đóng modal khi nhấn phím Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && productModal.classList.contains('active')) {
    closeModal();
  }
});

// Hàm đóng modal
function closeModal() {
  productModal.classList.remove('active');
  productModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Hàm hiển thị thông tin sản phẩm
function displayProduct(product) {
  document.getElementById('productTitle').textContent = product.name;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productUnit').textContent = product.unit;
  document.getElementById('productNote').textContent = product.note;
  
  // Hiển thị hình ảnh đầu tiên
  displayImage(0, product);
  
  // Tạo navigation dots nếu có nhiều hình ảnh
  if (product.gallery && product.gallery.length > 1) {
    createImageNav(product.gallery);
  }
}

// Hàm hiển thị ảnh theo index
function displayImage(index, product) {
  if (product.gallery && product.gallery.length > 0) {
    currentImageIndex = index;
    productImg.src = product.gallery[index];
    productImg.alt = product.name;
    
    // Cập nhật active dot
    const dots = document.querySelectorAll('.image-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
}

// Hàm tạo image navigation
function createImageNav(gallery) {
  imageNav.innerHTML = '';
  gallery.forEach((img, index) => {
    const dot = document.createElement('button');
    dot.className = 'image-dot' + (index === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Xem ảnh ${index + 1}`);
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = products[currentProductId];
      displayImage(index, product);
    });
    imageNav.appendChild(dot);
  });
}

// Keyboard navigation cho hình ảnh
document.addEventListener('keydown', (e) => {
  if (productModal.classList.contains('active') && currentProductId) {
    const product = products[currentProductId];
    if (!product.gallery) return;
    
    if (e.key === 'ArrowLeft') {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : product.gallery.length - 1;
      displayImage(newIndex, product);
    } else if (e.key === 'ArrowRight') {
      const newIndex = currentImageIndex < product.gallery.length - 1 ? currentImageIndex + 1 : 0;
      displayImage(newIndex, product);
    }
  }
});

// Nút đặt hàng - thêm vào giỏ hàng
contactBtn.addEventListener('click', addToCart);

// Đóng form đặt hàng
cancelOrderBtn.addEventListener('click', closeOrderModal);

// Đóng notification
notificationClose.addEventListener('click', hideNotification);

// Xử lý submit form
orderForm.addEventListener('submit', handleOrderSubmit);

// Đóng modal đặt hàng khi click ra ngoài
orderModal.addEventListener('click', (e) => {
  if (e.target === orderModal) {
    closeOrderModal();
  }
});

// Hàm mở form đặt hàng
function openOrderForm() {
  if (!currentProductId) return;
  
  const product = products[currentProductId];
  document.getElementById('orderProductName').textContent = product.name;
  document.getElementById('orderProductPrice').textContent = product.pricePerUnit;
  document.getElementById('unit').value = product.unit;
  
  // Reset form
  orderForm.reset();
  document.getElementById('quantity').value = 1;
  
  // Mở modal đặt hàng, đóng modal chi tiết sản phẩm
  productModal.classList.remove('active');
  orderModal.classList.add('active');
  orderModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Hàm đóng form đặt hàng
function closeOrderModal() {
  orderModal.classList.remove('active');
  orderModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Hàm hiển thị notification
function showNotification(message, type = 'success') {
  notificationMessage.textContent = message;
  notification.className = `notification show ${type}`;
  
  setTimeout(() => {
    hideNotification();
  }, 5000);
}

// Hàm ẩn notification
function hideNotification() {
  notification.classList.remove('show');
}

// Xử lý submit form
function handleOrderSubmit(e) {
  e.preventDefault();
  
  // Kiểm tra nếu đặt hàng từ giỏ hay từ sản phẩm
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const isFromCart = cart.length > 0 && !currentProductId;
  
  if (!isFromCart && !currentProductId) return;
  
  // Lấy dữ liệu từ form
  let orderData;
  
  if (isFromCart) {
    // Đặt hàng từ giỏ hàng
    orderData = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('vi-VN'),
      productId: 'cart-order',
      productName: `Đơn hàng từ giỏ (${cart.length} sản phẩm)`,
      productPrice: 'Xem chi tiết',
      quantity: cart.length,
      unit: 'sản phẩm',
      cartItems: cart,
      customerName: document.getElementById('customerName').value,
      customerPhone: document.getElementById('customerPhone').value,
      customerEmail: document.getElementById('customerEmail').value,
      customerAddress: document.getElementById('customerAddress').value,
      orderNote: document.getElementById('orderNote').value
    };
  } else {
    // Đặt hàng từ sản phẩm lẻ
    const product = products[currentProductId];
    orderData = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('vi-VN'),
      productId: currentProductId,
      productName: product.name,
      productPrice: product.pricePerUnit,
      quantity: document.getElementById('quantity').value,
      unit: product.unit,
      customerName: document.getElementById('customerName').value,
      customerPhone: document.getElementById('customerPhone').value,
      customerEmail: document.getElementById('customerEmail').value,
      customerAddress: document.getElementById('customerAddress').value,
      orderNote: document.getElementById('orderNote').value
    };
  }
  
  // Validate form
  if (!orderData.customerName || !orderData.customerPhone || !orderData.customerAddress) {
    showNotification('Vui lòng điền đầy đủ thông tin bắt buộc', 'error');
    return;
  }
  
  // Validate phone number
  const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
  if (!phoneRegex.test(orderData.customerPhone) || orderData.customerPhone.replace(/\D/g, '').length < 9) {
    showNotification('Số điện thoại không hợp lệ', 'error');
    return;
  }
  
  // Lưu vào LocalStorage
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(orderData);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  // Clear cart nếu đặt hàng từ giỏ
  if (isFromCart) {
    localStorage.removeItem('cart');
    updateCartBadge();
  }
  
  // Gửi email notification
  sendOrderEmail(orderData);
  
  // Hiển thị thành công
  showNotification(`✓ Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm.`, 'success');
  
  // Đóng form
  closeOrderModal();
  updateOrderBadge();
  
  // Reset
  orderForm.reset();
  currentProductId = null;
}

// Gửi email thông báo (tùy chọn - yêu cầu cấu hình EmailJS)
function sendOrderEmail(orderData) {
  // Tạo thông báo cho chủ shop (có thể thay bằng API của bạn)
  const orderSummary = `
    Đơn hàng mới từ: ${orderData.customerName}
    Sản phẩm: ${orderData.productName}
    Số lượng: ${orderData.quantity} ${orderData.unit}
    Giá: ${orderData.productPrice}
    Địa chỉ: ${orderData.customerAddress}
    Số điện thoại: ${orderData.customerPhone}
    Email: ${orderData.customerEmail || 'Không có'}
    Ghi chú: ${orderData.orderNote || 'Không có'}
  `;
  
  console.log('Order Details:', orderSummary);
  
  // Nếu bạn muốn gửi email thực sự, có thể dùng EmailJS
  // Tạm thời, chỉ log lên console và lưu vào localStorage
}

// Cập nhật badge số lượng đơn hàng
function updateOrderBadge() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const badge = document.getElementById('orderBadge');
  
  if (orders.length > 0) {
    badge.textContent = orders.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// ============ SHOPPING CART FUNCTIONS ============

// Thêm sản phẩm vào giỏ hàng
function addToCart() {
  if (!currentProductId) return;
  
  const product = products[currentProductId];
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  
  if (quantity < 1) {
    showNotification('Số lượng phải lớn hơn 0', 'error');
    return;
  }
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Kiểm tra sản phẩm đã tồn tại trong giỏ
  const existingItem = cart.find(item => item.productId === currentProductId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId: currentProductId,
      name: product.name,
      price: product.price,
      pricePerUnit: product.pricePerUnit,
      unit: product.unit,
      quantity: quantity
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  
  showNotification(`✓ Đã thêm ${quantity} ${product.unit} ${product.name} vào giỏ hàng`, 'success');
  closeModal();
}

// Cập nhật badge số lượng giỏ hàng
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const badge = document.getElementById('cartBadge');
  
  if (cart.length > 0) {
    badge.textContent = cart.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// Cấu hình modal giỏ hàng
function setupCartModal() {
  const cartLink = document.getElementById('cartLink');
  const cartModal = document.getElementById('cartModal');
  const cartModalClose = cartModal.querySelector('.modal-close');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  
  cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    openCartModal();
  });
  
  cartModalClose.addEventListener('click', closeCartModal);
  
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      closeCartModal();
    }
  });
  
  checkoutBtn.addEventListener('click', checkoutFromCart);
  continueShoppingBtn.addEventListener('click', closeCartModal);
}

// Mở modal giỏ hàng
function openCartModal() {
  const cartModal = document.getElementById('cartModal');
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartSummary = document.getElementById('cartSummary');
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartItems.innerHTML = '';
    cartSummary.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartSummary.style.display = 'block';
    
    let totalQuantity = 0;
    cartItems.innerHTML = cart.map((item, index) => {
      totalQuantity += item.quantity;
      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.pricePerUnit}</div>
          </div>
          <div class="cart-item-quantity">
            <button class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})" title="Giảm số lượng">−</button>
            <input type="number" class="qty-input" value="${item.quantity}" readonly>
            <button class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})" title="Tăng số lượng">+</button>
          </div>
          <button class="btn-remove-item" onclick="removeFromCart(${index})" title="Xóa khỏi giỏ">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    }).join('');
    
    document.getElementById('totalItems').textContent = totalQuantity;
  }
  
  cartModal.classList.add('active');
  cartModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Đóng modal giỏ hàng
function closeCartModal() {
  const cartModal = document.getElementById('cartModal');
  cartModal.classList.remove('active');
  cartModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Cập nhật số lượng sản phẩm trong giỏ
function updateCartQuantity(index, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(index);
    return;
  }
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index]) {
    cart[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    openCartModal();
  }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index]) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    openCartModal();
    showNotification(`✓ Đã xóa ${itemName} khỏi giỏ hàng`, 'success');
  }
}

// Thanh toán từ giỏ hàng
function checkoutFromCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length === 0) {
    showNotification('Giỏ hàng trống', 'error');
    return;
  }
  
  // Mở modal đơn hàng để nhập thông tin
  const orderModal = document.getElementById('orderModal');
  document.getElementById('orderProductName').textContent = `${cart.length} sản phẩm từ giỏ hàng`;
  document.getElementById('orderProductPrice').textContent = 'Xem chi tiết ở dưới';
  document.getElementById('unit').value = '';
  
  // Thêm tóm tắt giỏ hàng vào form
  const cartSummaryText = cart.map(item => `- ${item.name}: ${item.quantity} ${item.unit}`).join('\n');
  document.getElementById('orderNote').value = `GIỎ HÀNG:\n${cartSummaryText}\n\nGhi chú thêm:\n${document.getElementById('cartNote').value}`;
  
  orderForm.reset();
  document.getElementById('quantity').value = cart.length;
  
  closeCartModal();
  orderModal.classList.add('active');
  orderModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Cập nhật badge số lượng đơn hàng
function updateOrderBadge() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const badge = document.getElementById('orderBadge');
  
  if (orders.length > 0) {
    badge.textContent = orders.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// Cấu hình modal đơn hàng
function setupOrdersModal() {
  const ordersLink = document.getElementById('ordersLink');
  const ordersModal = document.getElementById('ordersModal');
  const ordersModalClose = ordersModal.querySelector('.modal-close');
  
  ordersLink.addEventListener('click', (e) => {
    e.preventDefault();
    openOrdersModal();
  });
  
  ordersModalClose.addEventListener('click', closeOrdersModal);
  
  ordersModal.addEventListener('click', (e) => {
    if (e.target === ordersModal) {
      closeOrdersModal();
    }
  });
}

// Mở modal danh sách đơn hàng
function openOrdersModal() {
  const ordersModal = document.getElementById('ordersModal');
  const ordersList = document.getElementById('ordersList');
  const ordersEmpty = document.getElementById('ordersEmpty');
  
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
  if (orders.length === 0) {
    ordersEmpty.style.display = 'block';
    ordersList.innerHTML = '';
  } else {
    ordersEmpty.style.display = 'none';
    ordersList.innerHTML = orders
      .sort((a, b) => b.id - a.id)
      .map((order, index) => `
        <div class="order-item">
          <div class="order-item-header">
            <div>
              <div class="order-id">Đơn hàng #${orders.length - index}</div>
              <div class="order-time">${order.timestamp}</div>
            </div>
          </div>
          <div class="order-item-content">
            <div class="order-detail">
              <div class="order-detail-row">
                <span class="order-detail-label">Sản phẩm:</span>
                <span class="order-detail-value">${order.productName}</span>
              </div>
              <div class="order-detail-row">
                <span class="order-detail-label">Số lượng:</span>
                <span class="order-detail-value">${order.quantity} ${order.unit}</span>
              </div>
              <div class="order-detail-row">
                <span class="order-detail-label">Giá:</span>
                <span class="order-detail-value">${order.productPrice}</span>
              </div>
            </div>
            <div class="order-detail">
              <div class="order-detail-row">
                <span class="order-detail-label">Tên khách:</span>
                <span class="order-detail-value">${order.customerName}</span>
              </div>
              <div class="order-detail-row">
                <span class="order-detail-label">Số điện thoại:</span>
                <span class="order-detail-value">${order.customerPhone}</span>
              </div>
              <div class="order-detail-row">
                <span class="order-detail-label">Email:</span>
                <span class="order-detail-value">${order.customerEmail || 'Không có'}</span>
              </div>
            </div>
          </div>
          <div style="background: #f5f7fa; padding: 0.8rem; border-radius: 6px; margin-bottom: 1rem;">
            <p style="margin: 0; color: #999; font-size: 0.9rem;"><strong>Địa chỉ giao hàng:</strong></p>
            <p style="margin: 0.5rem 0 0 0; color: #2c3e50;">${order.customerAddress}</p>
            ${order.orderNote ? `<p style="margin: 0.5rem 0 0 0; color: #2c3e50;"><strong>Ghi chú:</strong> ${order.orderNote}</p>` : ''}
          </div>
          <div class="order-actions-item">
            <button class="btn-action" onclick="copyOrderDetails(${order.id})">
              <i class="fa-solid fa-copy"></i> Sao chép
            </button>
            <button class="btn-action" onclick="deleteOrder(${order.id})">
              <i class="fa-solid fa-trash"></i> Xóa
            </button>
            <button class="btn-action" onclick="contactShop('${order.customerPhone}', '${order.productName}', '${order.quantity}')">
              <i class="fa-solid fa-phone"></i> Gọi shop
            </button>
          </div>
        </div>
      `)
      .join('');
  }
  
  ordersModal.classList.add('active');
  ordersModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Đóng modal danh sách đơn hàng
function closeOrdersModal() {
  const ordersModal = document.getElementById('ordersModal');
  ordersModal.classList.remove('active');
  ordersModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Copy thông tin đơn hàng
function copyOrderDetails(orderId) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const order = orders.find(o => o.id === orderId);
  
  if (!order) return;
  
  const text = `
Đơn hàng mới:
Sản phẩm: ${order.productName}
Số lượng: ${order.quantity} ${order.unit}
Giá: ${order.productPrice}
Khách hàng: ${order.customerName}
Số điện thoại: ${order.customerPhone}
Email: ${order.customerEmail || 'Không có'}
Địa chỉ: ${order.customerAddress}
Ghi chú: ${order.orderNote || 'Không có'}
  `.trim();
  
  navigator.clipboard.writeText(text).then(() => {
    showNotification('✓ Đã sao chép thông tin đơn hàng', 'success');
  });
}

// Xóa đơn hàng
function deleteOrder(orderId) {
  if (confirm('Bạn chắc chắn muốn xóa đơn hàng này?')) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(o => o.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
    updateOrderBadge();
    openOrdersModal();
    showNotification('✓ Đã xóa đơn hàng', 'success');
  }
}

// Gọi shop
function contactShop(phone, productName, quantity) {
  const message = `Tôi muốn xác nhận đơn hàng: ${quantity}kg ${productName}`;
  window.location.href = `tel:${phone}`;
}
// Smooth scroll cho các link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Thêm animation khi scroll vào view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .benefit-card, .testimonial-card, .product-card').forEach(el => {
  observer.observe(el);
});

// CSS animation cho fade in
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);