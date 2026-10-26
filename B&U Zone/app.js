/**
 * B&U ZONE - E-Commerce Engine
 * Founders: Bilal & Ubaid
 * Features: Product Database, Cart Management, Cash On Delivery Checkout,
 * Live Search, Category Filtering, Wishlist, Flash Sale Countdown, WhatsApp Integration.
 */

// ==========================================
// 1. PRODUCT CATALOG DATABASE
// ==========================================
const PRODUCTS = [
  {
    id: 'prod-earbuds-pro',
    title: 'B&U AirPro 3 ANC Wireless Earbuds',
    category: 'audio',
    categoryName: 'Audio & Earbuds',
    price: 4299,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 142,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    image: 'assets/images/earbuds.jpg',
    specs: ['45dB Active Noise Cancelling', '40H Battery Life', 'Dual Mic ENC', 'IPX5 Water Resistant'],
    inStock: true,
    stockLeft: 9,
    description: 'Tuned by audio engineers and tested by Bilal & Ubaid for deep bass and crystal clear calls. Features real-time LED battery percentage and smart touch controls.'
  },
  {
    id: 'prod-charger-65w',
    title: 'B&U SuperGaN 65W Tri-Port Fast Charger',
    category: 'chargers',
    categoryName: 'Fast Chargers',
    price: 3899,
    originalPrice: 5500,
    rating: 5.0,
    reviews: 218,
    badge: 'Top Pick',
    badgeType: 'tested',
    image: 'assets/images/charger.jpg',
    specs: ['65W GaN Technology', '2x Type-C + 1x USB-A', 'Laptop & Phone Compatible', 'Active Temp Control'],
    inStock: true,
    stockLeft: 14,
    description: 'Power your MacBook, iPhone, and Samsung flagships simultaneously. Stays cool under maximum load with multi-layer heat dissipation.'
  },
  {
    id: 'prod-powerbank-mag',
    title: 'B&U MagVolt 20,000mAh Magnetic Power Bank',
    category: 'powerbanks',
    categoryName: 'Power Banks',
    price: 5999,
    originalPrice: 8500,
    rating: 4.8,
    reviews: 96,
    badge: '30% OFF',
    badgeType: 'discount',
    image: 'assets/images/powerbank.jpg',
    specs: ['20,000mAh Capacity', 'Strong N52 Magnetic Ring', '22.5W Fast Charge', 'Crisp LED Display'],
    inStock: true,
    stockLeft: 7,
    description: 'Never run out of juice in Lahore or while traveling. Snaps firmly to iPhone MagSafe & Qi-enabled devices. LED screen shows precise remaining battery.'
  },
  {
    id: 'prod-cable-100w',
    title: 'B&U 100W ArmorBraid Cable with LED Watt Meter',
    category: 'cables',
    categoryName: 'Braided Cables',
    price: 1699,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 310,
    badge: 'Viral Gear',
    badgeType: 'bestseller',
    image: 'assets/images/cable.jpg',
    specs: ['100W Power Delivery', 'Real-time Wattage Display', 'Military-Grade Nylon', 'Zinc Alloy Heads'],
    inStock: true,
    stockLeft: 23,
    description: 'See the exact charging speed in real-time on the built-in digital display. Double-braided anti-fray nylon rated for 30,000+ bends.'
  },
  {
    id: 'prod-screen-protector',
    title: 'B&U 9H Diamond Tempered Glass + Easy Applicator',
    category: 'protection',
    categoryName: 'Screen Protectors',
    price: 1199,
    originalPrice: 1800,
    rating: 4.8,
    reviews: 84,
    badge: 'Easy Install',
    badgeType: 'tested',
    image: 'assets/images/screen_protector.jpg',
    specs: ['9H Hardness Glass', 'Bubble-Free Auto Align Tray', 'Oleophobic Coating', 'Edge-to-Edge Fit'],
    inStock: true,
    stockLeft: 18,
    description: 'Install your own screen protector in 10 seconds without bubbles or dust misalignment using the custom snap-on alignment frame.'
  },
  {
    id: 'prod-case-armor',
    title: 'B&U Frosted Armor Drop-Proof Case with Yellow Accents',
    category: 'cases',
    categoryName: 'Phone Cases',
    price: 1899,
    originalPrice: 2800,
    rating: 4.9,
    reviews: 125,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    image: 'assets/images/phone_case.jpg',
    specs: ['12ft Drop Protection', 'Matte Anti-Scratch Back', 'Tactile Metallic Buttons', 'Raised Camera Lip'],
    inStock: true,
    stockLeft: 11,
    description: 'Engineered with shock-absorbing TPU bumpers and clicky metallic yellow tactile buttons. Keeps your phone slim while providing ultimate military-spec protection.'
  },
  {
    id: 'prod-earbuds-basspods',
    title: 'B&U BassPods Neo Gaming Earbuds (38ms Ultra Latency)',
    category: 'audio',
    categoryName: 'Audio & Earbuds',
    price: 3499,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 73,
    badge: 'Gamer Choice',
    badgeType: 'discount',
    image: 'assets/images/earbuds.jpg',
    specs: ['38ms Low Latency Game Mode', 'Quad Microphones', 'Deep 13mm Drivers', 'Fast Type-C Charging'],
    inStock: true,
    stockLeft: 15,
    description: 'Zero audio delay for PUBG & Call of Duty Mobile. Punchy bass and sharp spatial footsteps sound.'
  },
  {
    id: 'prod-charger-33w',
    title: 'B&U VoltMini 33W GaN Dual Fast Charger',
    category: 'chargers',
    categoryName: 'Fast Chargers',
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 164,
    badge: 'Compact',
    badgeType: 'tested',
    image: 'assets/images/charger.jpg',
    specs: ['33W Super Fast 2.0', 'Dual Port (Type-C + USB-A)', 'Pocket Size 50% Smaller', 'Safe Multi-Protect'],
    inStock: true,
    stockLeft: 19,
    description: 'Half the size of conventional phone bricks. Charges Samsung devices at 25W/33W Super Fast and iPhones up to 50% in 25 minutes.'
  }
];

// Special Flash Bundle Item
const BUNDLE_ITEM = {
  id: 'prod-bundle-pro',
  title: "Bilal & Ubaid's Power Bundle Pro (65W Charger + 100W Cable + Mag Powerbank)",
  category: 'chargers',
  categoryName: 'Flash Bundle',
  price: 8499,
  originalPrice: 13800,
  rating: 5.0,
  reviews: 340,
  badge: 'Mega Deal',
  badgeType: 'bestseller',
  image: 'assets/images/hero.jpg',
  specs: ['65W GaN Tri-Port', '100W LED Watt Cable', '20,000mAh Magnetic Powerbank', 'Free Pakistan Express Shipping'],
  inStock: true,
  stockLeft: 14,
  description: 'The ultimate all-in-one charging trifecta personally recommended and bundled by Bilal & Ubaid. Save Rs. 5,301!'
};

// ==========================================
// 2. STATE & INITIALIZATION
// ==========================================
let cart = JSON.parse(localStorage.getItem('bu_zone_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bu_zone_wishlist')) || [];
let appliedDiscountPercent = 0;
let currentFilter = 'all';

// Constants
const FREE_SHIPPING_THRESHOLD = 2500;
const STANDARD_SHIPPING_COST = 200;

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistCount();
  setupEventListeners();
  startCountdownTimer();
  setupStickyHeader();
  setupScrollToTop();
});

// ==========================================
// 3. RENDER PRODUCTS
// ==========================================
function renderProducts(filter = 'all', searchQuery = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let items = PRODUCTS;

  // Filter by category
  if (filter !== 'all') {
    items = items.filter(p => p.category === filter);
  }

  // Filter by search query if any
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    items = items.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.categoryName.toLowerCase().includes(q) ||
      p.specs.some(s => s.toLowerCase().includes(q))
    );
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--accent-yellow); margin-bottom: 1rem;"></i>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">No accessories found</h3>
        <p>Try searching for "charger", "cable", or "earbuds"</p>
        <button class="btn btn-secondary btn-sm" onclick="filterByCategory('all')" style="margin-top: 1rem;">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-img-box">
          <div class="product-badge-list">
            <span class="product-badge badge-${product.badgeType}">${product.badge}</span>
            <span class="product-badge badge-discount">-${discountPercent}%</span>
          </div>

          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}', event)" 
                  aria-label="Save to Wishlist">
            <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
          </button>

          <img src="${product.image}" alt="${product.title}" class="product-thumb" loading="lazy">
          
          <button class="quick-view-overlay-btn" onclick="openQuickView('${product.id}')">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>

        <div class="product-content">
          <div class="product-category-meta">
            <span class="category-tag">${product.categoryName}</span>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating} (${product.reviews})</span>
            </div>
          </div>

          <h3 class="product-title" onclick="openQuickView('${product.id}')">${product.title}</h3>

          <div class="product-specs-list">
            ${product.specs.slice(0, 2).map(spec => `<span class="spec-pill">${spec}</span>`).join('')}
          </div>

          <div class="product-price-row">
            <span class="current-price">Rs. ${product.price.toLocaleString()}</span>
            <span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>
            <span class="stock-status-pill ${product.stockLeft < 10 ? 'low' : ''}">
              <i class="fa-solid fa-check"></i> ${product.stockLeft} in stock
            </span>
          </div>

          <div class="card-actions-row">
            <button class="btn btn-add-cart" onclick="addToCart('${product.id}')">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Add to Cart</span>
            </button>
            <button class="btn-quick-buy" onclick="quickBuyCOD('${product.id}')" title="1-Click Cash On Delivery">
              <i class="fa-solid fa-bolt"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 4. CART ENGINE & STORAGE
// ==========================================
function addToCart(productId, quantity = 1) {
  let product = PRODUCTS.find(p => p.id === productId);
  if (!product && productId === BUNDLE_ITEM.id) {
    product = BUNDLE_ITEM;
  }
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.id === productId);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.title}" to cart!`);
  openCart();
}

function addBundleToCart() {
  addToCart(BUNDLE_ITEM.id, 1);
}

function updateCartQuantity(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;

  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
    showToast('Item removed from cart');
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
}

function saveCart() {
  localStorage.setItem('bu_zone_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartCountEl = document.getElementById('cartCount');
  const cartDrawerCountEl = document.getElementById('cartDrawerCount');
  const cartHeaderTotalEl = document.getElementById('cartHeaderTotal');
  const cartContainer = document.getElementById('cartItemsContainer');
  const emptyView = document.getElementById('emptyCartView');
  const subtotalEl = document.getElementById('summarySubtotal');
  const discountLine = document.getElementById('discountLine');
  const discountEl = document.getElementById('summaryDiscount');
  const shippingEl = document.getElementById('summaryShipping');
  const grandTotalEl = document.getElementById('summaryGrandTotal');
  const shippingFill = document.getElementById('shippingProgressFill');
  const shippingText = document.getElementById('shippingProgressText');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCountEl) cartCountEl.textContent = totalItems;
  if (cartDrawerCountEl) cartDrawerCountEl.textContent = totalItems;
  if (cartHeaderTotalEl) cartHeaderTotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;

  // Shipping logic
  let shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : STANDARD_SHIPPING_COST;
  let discountAmount = Math.round(subtotal * (appliedDiscountPercent / 100));
  let grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  // Free shipping progress bar
  if (shippingFill && shippingText) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingFill.style.width = '100%';
      shippingText.innerHTML = `<i class="fa-solid fa-circle-check text-yellow"></i> You unlocked <strong>FREE DELIVERY across Pakistan!</strong>`;
    } else {
      const needed = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingFill.style.width = `${pct}%`;
      shippingText.innerHTML = `Add <strong>Rs. ${needed.toLocaleString()}</strong> more for <strong>FREE DELIVERY</strong>`;
    }
  }

  // Update summary lines
  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  
  if (discountLine && discountEl) {
    if (appliedDiscountPercent > 0 && subtotal > 0) {
      discountLine.style.display = 'flex';
      discountEl.textContent = `- Rs. ${discountAmount.toLocaleString()}`;
    } else {
      discountLine.style.display = 'none';
    }
  }

  if (shippingEl) {
    shippingEl.textContent = shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`;
    if (shippingCost === 0 && subtotal > 0) {
      shippingEl.classList.add('text-yellow');
    } else {
      shippingEl.classList.remove('text-yellow');
    }
  }

  if (grandTotalEl) grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  // Render items in drawer
  if (cart.length === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (cartContainer) {
      cartContainer.querySelectorAll('.cart-item-card').forEach(el => el.remove());
    }
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    if (emptyView) emptyView.style.display = 'none';
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.disabled = false;

    if (cartContainer) {
      // Remove old item cards
      cartContainer.querySelectorAll('.cart-item-card').forEach(el => el.remove());

      const itemsHtml = cart.map(item => `
        <div class="cart-item-card" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.title}</h4>
            <div class="cart-item-unit-price">Rs. ${item.price.toLocaleString()}</div>
            <div class="cart-stepper">
              <button class="stepper-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="stepper-value">${item.quantity}</span>
              <button class="stepper-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');

      cartContainer.insertAdjacentHTML('beforeend', itemsHtml);
    }
  }
}

// Promo code handler
function applyPromoCode() {
  const promoInput = document.getElementById('promoInput');
  const feedback = document.getElementById('promoFeedback');
  if (!promoInput || !feedback) return;

  const code = promoInput.value.trim().toUpperCase();

  if (code === 'BUZONE15') {
    appliedDiscountPercent = 15;
    feedback.className = 'promo-feedback success';
    feedback.textContent = '🎉 15% discount applied successfully!';
    updateCartUI();
    showToast('Coupon BUZONE15 applied: 15% OFF!');
  } else if (code === '') {
    feedback.className = 'promo-feedback error';
    feedback.textContent = 'Please enter a valid coupon code.';
  } else {
    feedback.className = 'promo-feedback error';
    feedback.textContent = 'Invalid promo code. Try "BUZONE15".';
  }
}

// ==========================================
// 5. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast('Saved to wishlist ❤️');
  }

  localStorage.setItem('bu_zone_wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
  renderProducts(currentFilter);
}

function updateWishlistCount() {
  const badge = document.getElementById('wishlistCount');
  if (badge) badge.textContent = wishlist.length;
}

// ==========================================
// 6. CATEGORY FILTERING & NAVIGATION
// ==========================================
function filterByCategory(category) {
  currentFilter = category;

  // Update tabs active state
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.filter === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderProducts(category);

  // Smooth scroll to catalog
  const shopEl = document.getElementById('shop');
  if (shopEl) {
    shopEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// 7. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  let product = PRODUCTS.find(p => p.id === productId);
  if (!product && productId === BUNDLE_ITEM.id) {
    product = BUNDLE_ITEM;
  }
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  content.innerHTML = `
    <button class="modal-close-btn" onclick="closeQuickView()" aria-label="Close modal">
      <i class="fa-solid fa-xmark"></i>
    </button>
    
    <div class="quick-view-grid">
      <div class="quick-view-img-col">
        <img src="${product.image}" alt="${product.title}" class="quick-view-img">
      </div>
      <div class="quick-view-info-col">
        <div class="product-category-meta">
          <span class="category-tag">${product.categoryName}</span>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <span>${product.rating} ★ (${product.reviews} verified reviews)</span>
          </div>
        </div>

        <h2 style="font-size: 1.4rem; color: #fff; line-height: 1.3;">${product.title}</h2>
        
        <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6;">${product.description}</p>

        <div style="background: rgba(255, 209, 0, 0.08); border: 1px solid rgba(255, 209, 0, 0.2); border-radius: 8px; padding: 0.75rem 1rem;">
          <strong style="color: var(--accent-yellow); font-size: 0.85rem; display: block; margin-bottom: 0.4rem;">Key Highlights:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.85rem;">
            ${product.specs.map(s => `<li><i class="fa-solid fa-check text-yellow" style="margin-right: 0.5rem;"></i>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="product-price-row" style="margin-top: 0;">
          <span class="current-price" style="font-size: 1.8rem;">Rs. ${product.price.toLocaleString()}</span>
          <span class="original-price" style="font-size: 1.1rem;">Rs. ${product.originalPrice.toLocaleString()}</span>
          <span class="deal-discount-tag">Save ${discountPercent}%</span>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
          <button class="btn btn-primary btn-full" onclick="addToCart('${product.id}'); closeQuickView();">
            <i class="fa-solid fa-cart-shopping"></i> Add To Cart
          </button>
          <button class="btn btn-secondary" onclick="quickBuyCOD('${product.id}'); closeQuickView();" title="1-Click Cash On Delivery">
            <i class="fa-solid fa-bolt"></i> Buy Now
          </button>
        </div>

        <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 0.5rem;">
          <span><i class="fa-solid fa-truck text-yellow"></i> Same-day Lahore delivery</span>
          <span><i class="fa-solid fa-handshake text-yellow"></i> 7-day replacement warranty</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.getElementById('backdrop')?.classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('active');
  document.getElementById('backdrop')?.classList.remove('active');
}

// ==========================================
// 8. CHECKOUT & CASH ON DELIVERY (COD)
// ==========================================
let directOrderItem = null;

function quickBuyCOD(productId) {
  let product = PRODUCTS.find(p => p.id === productId);
  if (!product && productId === 'bundle') product = BUNDLE_ITEM;
  if (!product) return;

  directOrderItem = product;
  openCheckoutModal(true);
}

function openQuickOrderModal(type) {
  if (type === 'bundle') {
    directOrderItem = BUNDLE_ITEM;
    openCheckoutModal(true);
  }
}

function openCheckoutModal(isDirectBuy = false) {
  closeCart();
  const modal = document.getElementById('checkoutModal');
  const summaryBox = document.getElementById('checkoutModalSummary');
  const finalPayableEl = document.getElementById('modalFinalPayable');
  if (!modal || !summaryBox) return;

  let itemsToOrder = [];
  let subtotal = 0;

  if (isDirectBuy && directOrderItem) {
    itemsToOrder = [{
      title: directOrderItem.title,
      price: directOrderItem.price,
      quantity: 1
    }];
    subtotal = directOrderItem.price;
  } else {
    if (cart.length === 0) {
      showToast('Your cart is empty! Add products first.');
      return;
    }
    itemsToOrder = cart;
    subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  const discountAmount = Math.round(subtotal * (appliedDiscountPercent / 100));
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  summaryBox.innerHTML = `
    <div style="font-weight: 700; color: #fff; margin-bottom: 0.6rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.4rem;">
      Order Items (${itemsToOrder.length}):
    </div>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; max-height: 140px; overflow-y: auto;">
      ${itemsToOrder.map(item => `
        <li style="display: flex; justify-content: space-between; font-size: 0.85rem;">
          <span style="color: var(--text-body); max-width: 70%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
            ${item.quantity}x ${item.title}
          </span>
          <span style="color: #fff; font-weight: 600;">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
        </li>
      `).join('')}
    </ul>
    <div style="margin-top: 0.8rem; padding-top: 0.6rem; border-top: 1px dashed var(--border-subtle); font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.3rem;">
      <div style="display: flex; justify-content: space-between;">
        <span>Subtotal:</span>
        <span>Rs. ${subtotal.toLocaleString()}</span>
      </div>
      ${discountAmount > 0 ? `
        <div style="display: flex; justify-content: space-between; color: var(--accent-yellow);">
          <span>Promo Discount (15%):</span>
          <span>- Rs. ${discountAmount.toLocaleString()}</span>
        </div>
      ` : ''}
      <div style="display: flex; justify-content: space-between;">
        <span>Shipping:</span>
        <span class="${shippingCost === 0 ? 'text-yellow' : ''}">${shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1rem; color: #fff; margin-top: 0.3rem;">
        <span>Payable on Delivery:</span>
        <span class="text-yellow">Rs. ${grandTotal.toLocaleString()}</span>
      </div>
    </div>
  `;

  if (finalPayableEl) finalPayableEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  modal.classList.add('active');
  document.getElementById('backdrop')?.classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
  document.getElementById('backdrop')?.classList.remove('active');
  directOrderItem = null;
}

function handleOrderSubmission(e) {
  e.preventDefault();

  const name = document.getElementById('custName')?.value.trim();
  const phone = document.getElementById('custPhone')?.value.trim();
  const address = document.getElementById('custAddress')?.value.trim();
  const city = document.getElementById('custCity')?.value;
  const payment = document.getElementById('custPayment')?.value;
  const notes = document.getElementById('custNotes')?.value.trim();

  if (!name || !phone || !address) {
    showToast('Please fill all required fields');
    return;
  }

  // Generate order reference
  const orderId = 'BUZ-' + Math.floor(10000 + Math.random() * 90000);
  
  let orderedItems = directOrderItem ? [directOrderItem] : [...cart];
  let subtotal = directOrderItem ? directOrderItem.price : cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = Math.round(subtotal * (appliedDiscountPercent / 100));
  let shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
  let finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  // Close form modal
  closeCheckoutModal();

  // Populate Order Success Modal
  document.getElementById('successOrderId').textContent = orderId;
  document.getElementById('successCustomerName').textContent = name;
  document.getElementById('successDeliveryAddress').textContent = `${address}, ${city}`;
  document.getElementById('successOrderTotal').textContent = `Rs. ${finalTotal.toLocaleString()} (${payment})`;

  // WhatsApp confirmation message
  const itemSummary = orderedItems.map(i => `${i.quantity || 1}x ${i.title}`).join(', ');
  const waMessage = encodeURIComponent(
    `Salam Bilal & Ubaid!\nI have placed an order on B&U Zone.\n\nOrder ID: ${orderId}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, ${city}\nItems: ${itemSummary}\nTotal Payable: Rs. ${finalTotal.toLocaleString()}\nPayment: ${payment}\nNotes: ${notes || 'None'}\n\nPlease confirm dispatch!`
  );
  const waLink = `https://wa.me/923001234567?text=${waMessage}`;
  const successWaBtn = document.getElementById('successWhatsAppLink');
  if (successWaBtn) successWaBtn.href = waLink;

  // Clear cart if standard checkout
  if (!directOrderItem) {
    cart = [];
    saveCart();
    updateCartUI();
  }

  // Show Success Modal
  const successModal = document.getElementById('orderSuccessModal');
  if (successModal) successModal.classList.add('active');
  document.getElementById('backdrop')?.classList.add('active');
}

function closeOrderSuccessModal() {
  document.getElementById('orderSuccessModal')?.classList.remove('active');
  document.getElementById('backdrop')?.classList.remove('active');
}

// ==========================================
// 9. LIVE SEARCH ENGINE
// ==========================================
function setupSearch() {
  const desktopInput = document.getElementById('desktopSearchInput');
  const desktopBtn = document.getElementById('desktopSearchBtn');
  const mobileTrigger = document.getElementById('mobileSearchTrigger');
  const searchDrawer = document.getElementById('searchDrawer');
  const mobileInput = document.getElementById('mobileSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const resultsContainer = document.getElementById('searchResultsList');

  // Desktop search input
  if (desktopInput) {
    desktopInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      renderProducts('all', q);
      if (q.length > 0) {
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    desktopBtn?.addEventListener('click', () => {
      renderProducts('all', desktopInput.value.trim());
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Mobile search drawer
  if (mobileTrigger && searchDrawer) {
    mobileTrigger.addEventListener('click', () => {
      searchDrawer.classList.toggle('active');
      document.getElementById('backdrop')?.classList.toggle('active');
      if (searchDrawer.classList.contains('active')) {
        setTimeout(() => mobileInput?.focus(), 200);
      }
    });
  }

  if (clearBtn && mobileInput) {
    clearBtn.addEventListener('click', () => {
      mobileInput.value = '';
      if (resultsContainer) resultsContainer.innerHTML = '';
      renderProducts('all');
    });
  }

  if (mobileInput && resultsContainer) {
    mobileInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        resultsContainer.innerHTML = '';
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            No items matching "${query}"
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="openQuickView('${p.id}'); closeSearchDrawer();">
          <img src="${p.image}" alt="${p.title}" class="search-result-thumb">
          <div class="search-result-details">
            <div class="search-result-title">${p.title}</div>
            <div class="search-result-price">Rs. ${p.price.toLocaleString()}</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="color: var(--accent-yellow); font-size: 0.8rem;"></i>
        </div>
      `).join('');
    });
  }
}

function closeSearchDrawer() {
  document.getElementById('searchDrawer')?.classList.remove('active');
  document.getElementById('backdrop')?.classList.remove('active');
}

// ==========================================
// 10. CART DRAWER TOGGLE
// ==========================================
function openCart() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('backdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('backdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 11. FLASH DEAL COUNTDOWN TIMER
// ==========================================
function startCountdownTimer() {
  const cdHours = document.getElementById('cdHours');
  const cdMins = document.getElementById('cdMinutes');
  const cdSecs = document.getElementById('cdSeconds');

  if (!cdHours) return;

  // 7 hours, 42 minutes, 18 seconds duration
  let remainingSeconds = 7 * 3600 + 42 * 60 + 18;

  setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
    } else {
      remainingSeconds = 24 * 3600; // Reset next cycle
    }

    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;

    cdHours.textContent = h.toString().padStart(2, '0');
    cdMins.textContent = m.toString().padStart(2, '0');
    cdSecs.textContent = s.toString().padStart(2, '0');
  }, 1000);
}

// ==========================================
// 12. TOAST NOTIFICATION SYSTEM
// ==========================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('active');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

// ==========================================
// 13. NEWSLETTER HANDLER
// ==========================================
function handleNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  if (!emailInput) return;

  const email = emailInput.value.trim();
  if (email) {
    showToast(`Welcome to B&U VIP Club! Check ${email} for code.`);
    emailInput.value = '';
  }
}

// ==========================================
// 14. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('backdrop');

  mobileMenuBtn?.addEventListener('click', () => {
    navLinks?.classList.add('active');
    backdrop?.classList.add('active');
  });

  const closeMobileNav = () => {
    navLinks?.classList.remove('active');
    backdrop?.classList.remove('active');
  };

  mobileCloseBtn?.addEventListener('click', closeMobileNav);

  // Close nav on nav-item click
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', closeMobileNav);
  });

  // Cart Header Button
  document.getElementById('cartHeaderBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);

  // Wishlist Header Button
  document.getElementById('wishlistHeaderBtn')?.addEventListener('click', () => {
    showToast(`You have ${wishlist.length} item(s) in your Wishlist.`);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Backdrop click closes all drawers & modals
  backdrop?.addEventListener('click', () => {
    closeMobileNav();
    closeCart();
    closeQuickView();
    closeCheckoutModal();
    closeOrderSuccessModal();
    closeSearchDrawer();
  });

  // Category filter buttons
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      filterByCategory(cat);
    });
  });

  setupSearch();
}

// Sticky Header elevation on scroll
function setupStickyHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Scroll to top button
function setupScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
