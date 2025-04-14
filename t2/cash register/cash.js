let userCart = {};

function addItem() {
  const itemName = document.getElementById("itemName").value.trim();
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);

  if (itemName === "" || isNaN(itemPrice)) {
    alert("Please enter a valid item name and price.");
    return;
  }

  userCart[itemName] = itemPrice;
  updateCartList();

  // Clear input fields
  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
}

function updateCartList() {
  const cartListDiv = document.getElementById("cartList");
  cartListDiv.innerHTML = "<h3>Items in Cart:</h3><ul>" + 
    Object.entries(userCart)
      .map(([item, price]) => `<li>${item}: $${price.toFixed(2)}</li>`)
      .join("") + 
    "</ul>";
}

function cashRegister(cart) {
  let total = 0;
  for (let item in cart) {
    total += parseFloat(cart[item]);
  }
  return total.toFixed(2);
}

function calculateTotal() {
  if (Object.keys(userCart).length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = cashRegister(userCart);
  document.getElementById("totalPrice").textContent = `Total: $${total}`;
}
