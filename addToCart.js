import { getCartProductFromLS } from "./getCardProducts";
import { showToast } from "./showToast";
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

      // show toast when add to cart 

      showToast('add', id);
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
        // show toast when add to cart 

        showToast('add', id);
}; 


// 



// import { getCartProductFromLS } from "./getCartProducts";
// import { showToast } from "./showToast";
// import { updateCartValue } from "./updateCartValue";

// // -----------------------------------------------------
// // to get the cart data from localStorage
// // to update the cart value and also to get the data always ready from localStorage
// // --------------------------------------------------------
// getCartProductFromLS();

// // -----------------------------------------------------
// // to add the data into localStorage
// // --------------------------------------------------------
// export const addToCart = (event, id, stock) => {
//   let arrLocalStorageProduct = getCartProductFromLS();

//   const currentProdElem = document.querySelector(`#card${id}`);
//   let quantity = currentProdElem.querySelector(".productQuantity").innerText;
//   let price = currentProdElem.querySelector(".productPrice").innerText;
//   //   console.log(quantity, price);
//   price = price.replace("₹", "");

//   let existingProd = arrLocalStorageProduct.find(
//     (curProd) => curProd.id === id
//   );

//   console.log(existingProd);

//   if (existingProd && quantity > 1) {
//     quantity = Number(existingProd.quantity) + Number(quantity);
//     price = Number(price * quantity);
//     let updatedCart = { id, quantity, price };

//     updatedCart = arrLocalStorageProduct.map((curProd) => {
//       return curProd.id === id ? updatedCart : curProd;
//     });
//     console.log(updatedCart);

//     localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
//     //show toast when product added to the cart
//     showToast("add", id);
//   }

//   if (existingProd) {
//     // alert("bhai duplicate hai");
//     return false;
//   }

//   //todo Don't Forget To LIKE SHARE & SUBSCRIBE TO THAPA TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/thapatechnical

//   price = Number(price * quantity);
//   quantity = Number(quantity);

//   arrLocalStorageProduct.push({ id, quantity, price });
//   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

//   //update the cart button value
//   updateCartValue(arrLocalStorageProduct);

//   //show toast when product added to the cart
//   showToast("add", id);
// };