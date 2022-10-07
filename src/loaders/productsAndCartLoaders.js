import { getStoredCart } from "../utilities/fakedb";

export default async function productsAndCartLoaders() {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const storedCart = getStoredCart();
    const cartProducts = products.filter(p => storedCart[p.id]);
    cartProducts.forEach(p => p.quantity = storedCart[p.id]);

    // { below code could be here, works as same as above one }
    
    return { products, cartProducts };
}


// const storedCart = getStoredCart();
// const savedCart = [];
// for (const id in storedCart) {
//     const addedProduct = products.find(product => product.id === id);
//     if (addedProduct) {
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);
//     }
// }