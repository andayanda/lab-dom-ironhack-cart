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
  let total = 0;
  [...products].forEach(product => {
    const subtotal = parseInt( updateSubtotal(product));
    total +=subtotal;
  })

  
  // ITERATION 3
  
  document.querySelector("#total-value span").innerHTML = total;
  console.log("The total is:", total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct =  `<tr class="create-product">
  <td>
    <input type="text" placeholder="Product Name" />
  </td>
  <td>
    <input type="number" min="0" value="0" placeholder="Product Price" />
  </td>
  <td></td>
  <td></td>
  <td>
    <button id="create" class="btn">Create Product</button>
  </td>
</tr>`
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  document.querySelectorAll(".btn-remove").forEach(function (btn) {
    btn.addEventListener("click", removeProduct);
  });
  document.querySelectorAll(".create").forEach(function (btn) {
    btn.addEventListener("click", createProduct);
  });
  //... your code goes here
});
