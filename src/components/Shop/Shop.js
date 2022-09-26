import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        
    }, [])

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    console.log(products)

    const addToCart = (product) => {
        const isExistProduct = cart.find(p => p.id === product.id);
        let newCart;
        if(isExistProduct){
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