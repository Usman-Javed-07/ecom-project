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