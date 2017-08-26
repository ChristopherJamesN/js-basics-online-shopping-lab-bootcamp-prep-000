var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random()*100+1);
 var newItem = {[itemName]: itemPrice};
 var cartSize = cart.length;
 cart[cartSize] = newItem;
 console.log(itemName + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ".");
  } else if (cart.length === 2 ) {
    console.log("In your cart, you have " + Object.keys(cart[0])[0]  + " at $" + cart[0][Object.keys(cart[0])[0]]  + " and " + Object.keys(cart[1])[0]  + " at $" + cart[1][Object.keys(cart[1])[0]]  + ".");
  } else if (cart.length ===3 ){
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ", " + Object.keys(cart[1])[0] + ` at $${cart[1][Object.keys(cart[1])[0]]}, and ${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}.`);
  } else {
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ", " + Object.keys(cart[1])[0] + ` at $${cart[1][Object.keys(cart[1])[0]]}, ${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}, and ${Object.keys(cart[3])[0]} at $${cart[3][Object.keys(cart[3])[0]]}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
