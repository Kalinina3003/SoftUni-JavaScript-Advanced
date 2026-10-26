// Task: Shopping Cart.
// Description: Add products to the cart and display their prices.
// On checkout, calculate the total price, list unique products,
// display the result, and disable all buttons.

function solve() {
   let products = document.querySelectorAll('.product');
   let textarea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');

   let boughtProducts = [];
   let totalPrice = 0;

   for (let product of products) {
      let addButton = product.querySelector('.add-product');
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);

      addButton.addEventListener('click', function () {
         textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

         boughtProducts.push(name);
         totalPrice += price;
      });
   }

   checkoutButton.addEventListener('click', function () {
      let uniqueProducts = [...new Set(boughtProducts)];

      textarea.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      let buttons = document.querySelectorAll('button');

      for (let button of buttons) {
         button.disabled = true;
      }
   });
}
