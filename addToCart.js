import { getCartProductFromLS } from "./getCardProducts";

export const addToCart = (event, id, stock) => {


      let arrLocalStorageProduct = getCartProductFromLS();

      const currentProdElem = document.querySelector(`#card${id}`);
      let quantity = currentProdElem.querySelector('.productQuantity').innerText;
      let price = currentProdElem.querySelector('.productPrice').innerText;
      // console.log(quantity, price);

      price = price.replace('PKR', '');
      price = Number(price * quantity);
      quantity = Number(quantity);

      arrLocalStorageProduct.push ({id, quantity , price});
      localStorage.setItem('cardProductsLS', JSON.stringify(arrLocalStorageProduct));
}; 