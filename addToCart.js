export const addToCart = (event, id, stock) => {

      const currentProdElem = document.querySelector(`#card${id}`);
      let quantity = currentProdElem.querySelector('.productQuantity').innerText;
      let price = currentProdElem.querySelector('.productPrice').innerText;
      console.log(quantity, price);
};