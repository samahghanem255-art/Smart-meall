let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  alert("تمت الإضافة ✔");
}

function updateCart() {
  let count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;
}

function openCart() {
  if (cart.length === 0) {
    alert("السلة فارغة");
    return;
  }

  let msg = "🛒 طلبك:\n\n";
  let total = 0;

  cart.forEach(i => {
    msg += i.name + " - " + i.price + " دج\n";
    total += i.price;
  });

  msg += "\nالمجموع: " + total + " دج";

  alert(msg);
}

function confirmOrder() {
  if (cart.length === 0) {
    alert("السلة فارغة");
    return;
  }

  let msg = "طلب جديد:\n\n";
  let total = 0;

  cart.forEach(i => {
    msg += i.name + " - " + i.price + " دج\n";
    total += i.price;
  });

  msg += "\nالمجموع: " + total;

  let phone = "213671070943";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
