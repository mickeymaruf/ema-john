import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const totalPrice = cart.reduce((prev, item) => item.price+prev, 0);

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
                <h2>Order Summary</h2>
                <div>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <h3>Grand Total: ${totalPrice}</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;