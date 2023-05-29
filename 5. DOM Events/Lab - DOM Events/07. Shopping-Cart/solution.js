function solve() {
   let totalPrice = 0;
   let productObj = {};

   let addButtons = document.querySelectorAll('.add-product');
   let allButtonsArray = Array.from(addButtons);
   allButtonsArray.forEach(addBtn => addBtn.addEventListener('click', addHandlerFn));

   let textArea = document.querySelector('textarea');
   let allButtonsInHtml = document.querySelectorAll('button');

   let checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', checkoutFn);

   function addHandlerFn(event) {
      let currentelement = event.target;
      let divProduct = currentelement.parentElement.parentElement;
      // качвам се 2 родителя на горе по дървото за да взема продукт-Дива

      let productTitle = divProduct.querySelector('.product-title');
      let product = productTitle.textContent;

      let priceTag = divProduct.querySelector('.product-line-price');
      let price = Number(priceTag.textContent);

      totalPrice += price;

      productObj[product] = true;
      textArea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
   }

   function checkoutFn() {
      allButtonsInHtml.forEach(btn => btn.setAttribute("disabled", ""));
      let nameProduct = Object.keys(productObj).join(', ');
      textArea.value += `You bought ${nameProduct} for ${totalPrice.toFixed(2)}.`
   }
}