import { getCartProductFromLS } from "./getCardProducts";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
export const addToCart = (event, id, stock) => {

      let arrLocalStorageProduct = getCartProductFromLS();

      const currentProdElem = document.querySelector(`#card${id}`);
      let quantity = currentProdElem.querySelector('.productQuantity').innerText;
      let price = currentProdElem.querySelector('.productPrice').innerText;
      // console.log(quantity, price);
      price = price.replace('PKR', '');
      let existingProd = arrLocalStorageProduct.find((curprod) => curprod.id === id);

if(existingProd && quantity > 1) {
      quantity = Number(existingProd.quantity) + Number(quantity);
      price = Number(price * quantity);
      let updatedCart = {id,price, quantity};

      updatedCart = arrLocalStorageProduct.map((curprod) => {
            return curprod.id === id ? updatedCart : curprod ;
      });
      console.log(updatedCart)
      localStorage.setItem('cardProductLS', JSON.stringify(updatedCart));
      
}



      if(existingProd) {
            // alert('Current Product Exist in Cart');
            return false;
      }
      

      // price = price.replace('PKR', '');
      price = Number(price * quantity);
      quantity = Number(quantity);

      arrLocalStorageProduct.push({id, quantity , price});
      localStorage.setItem('cardProductLS', JSON.stringify(arrLocalStorageProduct));

      updateCartValue(arrLocalStorageProduct);
}; 