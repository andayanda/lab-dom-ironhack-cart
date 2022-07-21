// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").textContent;
  console.log("The price is:", price);
  const quantity = product.querySelector(".quantity input ").value;
  console.log("The quantity is:", quantity);
  const subtotal = product.querySelector(".subtotal span");
  subtotal.textContent = price * quantity;
  return subtotal.textContent;
}

function calculateAll() {
  

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  console.log("The products are:", products);

  updateSubtotal(products[0]);
  updateSubtotal(products[1]);
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
