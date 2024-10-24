import { getCartProductFromLS } from "./getCardProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts =  getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // now update local storage

    localStorage.setItem('cardProductLS', JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv) {
        removeDiv.remove();
        // 
        // show toast
         showToast('delete', id);
    }
    updateCartValue(cartProducts);
};



// 


// import { getCartProductFromLS } from "./getCartProducts";
// import { showToast } from "./showToast";
// import { updateCartProductTotal } from "./updateCartProductTotal";
// import { updateCartValue } from "./updateCartValue";

// export const removeProdFromCart = (id) => {
//   let cartProducts = getCartProductFromLS();
//   cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

//   // update the localStorage after removing the item
//   localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

//   //   to remove the div onclick
//   let removeDiv = document.getElementById(`card${id}`);
//   if (removeDiv) {
//     removeDiv.remove();

//     //show toast when product added to the cart
//     showToast("delete", id);
//   }

//   // -----------------------------------------------------
//   // calculating the card total in our cartProducts page
//   // --------------------------------------------------------
//   updateCartProductTotal();

//   updateCartValue(cartProducts);
// };
