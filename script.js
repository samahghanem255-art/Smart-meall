let cart = [];

// ===== SPLASH =====
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('splash').classList.add('hide');
    setTimeout(function () {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('app').classList.add('show');
    }, 800);
  }, 2600);
});

// ===== TOAST =====
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

// ===== CART =====
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
  showToast('✓ تمت الإضافة: ' + name);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price, 0);
  document.getElementById('cartCount').textContent = cart.length;
  document.getElementById('totalDisplay').textContent = total.toLocaleString() + ' دج';

  const itemsEl = document.getElementById('cartItems');
  const footEl = document.getElementById('cartFoot');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="empty-cart"><div style="font-size:40px;margin-bottom:12px">🛒</div>السلة فارغة</div>';
    footEl.style.
