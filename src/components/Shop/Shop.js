import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const { products, cartProducts } = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(cartProducts)
    }, [products, cartProducts])

    const addToCart = (product) => {
        const isExistProduct = cart.find(p => p.id === product.id);
        let newCart;
        if (isExistProduct) {
            const rest = cart.filter(p => p.id !== isExistProduct.id);
            isExistProduct.quantity++;
            newCart = [...rest, isExistProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop'>
            <div className="products-wrapper">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-wrapper">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;