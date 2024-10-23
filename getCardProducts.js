import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
    let CardProducts = localStorage.getItem('cardProductLS');
    if (!CardProducts) {
        return [];
    }
    CardProducts = JSON.parse(CardProducts);
    updateCartValue(CardProducts);

    return CardProducts;
};


// 


// import { updateCartValue } from "./updateCartValue";

// export const getCartProductFromLS = () => {
//   let cartProducts = localStorage.getItem("cartProductLS");
//   if (!cartProducts) {
//     return [];
//   }
//   cartProducts = JSON.parse(cartProducts);

//   //update the cart button value
//   updateCartValue(cartProducts);

//   return cartProducts;
// };
