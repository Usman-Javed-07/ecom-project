import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQunantityToggle";

const productContainer = document.querySelector ('#productContainer');
const productTemplete = document.querySelector ('#productTemplate');

export const showproductContainer = (products) => {

if (!products) {
    return false ;
}
products.forEach((curprod)=>{
const {brand , category, description, id, image, name, price, stock } = curprod;

const productClone = document.importNode (productTemplete.content, true);
 
productClone.querySelector('#cardValue').setAttribute('id', `card${id}`) ;

productClone.querySelector('.productName').textContent = name;
productClone.querySelector('.category').textContent = category;
productClone.querySelector('.productImage').src = image;
productClone.querySelector('.productImage').alt = name;
productClone.querySelector('.productStock').textContent = stock;
productClone.querySelector('.productDescription').textContent = description;
productClone.querySelector('.productPrice').textContent = `PKR ${price} `;
productClone.querySelector('.productActualPrice').textContent = `PKR ${price * 3} `;

productClone 
.querySelector('.stockElement')
.addEventListener('click', (event)=>{
homeQuantityToggle(event, id, stock);
});

productClone 
.querySelector('.add-to-cart-button')
.addEventListener('click', (event) => {
    addToCart(event,id,stock);
});
productContainer.append(productClone);

});
};