export const getCartProductFromLS = () => {
    let CardProducts = localStorage.getItem('cardProductLS');
    if (! CardProducts) {
        return [];
    }
    CardProducts = JSON.parse(CardProducts);
    return CardProducts;
};