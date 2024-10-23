import products from './api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLS } from './getCardProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeProdFromCart } from './removeProdFromCart';
import { updateCartProdTotal } from './updateCartProdTotal';

let cartProducts =  getCartProductFromLS();


let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts)


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () =>{
filterProducts.forEach((curProd) => {
    const  {category, id, image, stock, name, price} = curProd;
    
    let productClone = document.importNode(templateContainer.content,true);
    
    const LSActualData = fetchQuantityFromCartLS(id, price);

 

    

    productClone.querySelector('.category').textContent = category ;
    productClone.querySelector('#cardValue').setAttribute('id', `card${id}`); 
    productClone.querySelector('.productName').textContent = name ;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;
    productClone.querySelector('.productPrice').textContent= LSActualData.price;

    productClone.querySelector('.stockElement').addEventListener('click',(event)=>  incrementDecrement(event, id, stock,price));

    productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=> removeProdFromCart(id));

    cartElement.appendChild(productClone);
});

};
showCartProduct();

updateCartProdTotal();

// 



// import products from "./api/products.json";
// import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
// import { getCartProductFromLS } from "./getCartProducts";
// import { incrementDecrement } from "./incrementDecrement";
// import { removeProdFromCart } from "./removeProdFromCart";
// import { updateCartProductTotal } from "./updateCartProductTotal";

// let cartProducts = getCartProductFromLS();

// let filterProducts = products.filter((curProd) => {
//   return cartProducts.some((curElem) => curElem.id === curProd.id);
// });

// console.log(filterProducts);

// // -----------------------------------------------------
// // to update the addToCart page
// // --------------------------------------------------------
// const cartElement = document.querySelector("#productCartContainer");
// const templateContainer = document.querySelector("#productCartTemplate");

// const showCartProduct = () => {
//   filterProducts.forEach((curProd) => {
//     const { category, id, image, name, stock, price } = curProd;

//     let productClone = document.importNode(templateContainer.content, true);

//     const lSActualData = fetchQuantityFromCartLS(id, price);

//     productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
//     productClone.querySelector(".category").textContent = category;
//     productClone.querySelector(".productName").textContent = name;
//     productClone.querySelector(".productImage").src = image;

//     productClone.querySelector(".productQuantity").textContent =
//       lSActualData.quantity;
//     productClone.querySelector(".productPrice").textContent =
//       lSActualData.price;

//     // handle increment and decrement button
//     productClone
//       .querySelector(".stockElement")
//       .addEventListener("click", (event) => {
//         incrementDecrement(event, id, stock, price);
//       });

//     productClone
//       .querySelector(".remove-to-cart-button")
//       .addEventListener("click", () => removeProdFromCart(id));

//     cartElement.appendChild(productClone);
//   });
// };

// // -----------------------------------------------------
// // Showing the cartProducts
// // --------------------------------------------------------
// showCartProduct();

// // -----------------------------------------------------
// // calculating the card total in our cartProducts page
// // --------------------------------------------------------
// updateCartProductTotal();
