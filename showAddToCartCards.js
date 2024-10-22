import products from './api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLS } from './getCardProducts';
import { removeProdFromCart } from './removeProdFromCart';

let cartProducts =  getCartProductFromLS();


let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts)


const cartElement = document.querySelector('#productCartContainer');
const templeteContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () =>{
filterProducts.forEach((curProd) => {
    const  {category, id, image, stock, name, price} = curProd;
    
    let productClone = document.importNode(templeteContainer.content,true);
    
    const LSActualData = fetchQuantityFromCartLS(id, price);



    productClone.querySelector('.category').textContent = category ;
    productClone.querySelector('#cardValue').setAttribute('id', `cart${id}`); 
    productClone.querySelector('.productName').textContent = name ;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;
    productClone.querySelector('.productPrice').textContent= LSActualData.price;

    productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=> removeProdFromCart(id));

    cartElement.appendChild(productClone);
});

};
showCartProduct();