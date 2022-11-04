import { getStoredCart } from "./fakedb";

const getStoredCartProducts = (products) => {
    /* this function takes carts from localStorage
    and turns it into real products list from products data by filtering ids
    and sets the quantity of the cart products and returns it. */
    const storedCart = getStoredCart();
    const cartProducts = products.filter(p => storedCart[p._id]);
    cartProducts.forEach(p => p.quantity = storedCart[p._id]);
    return cartProducts;
}

export default getStoredCartProducts;