import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Orders.css';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import getStoredCartProducts from '../../utilities/getStoredCartProducts';

const Orders = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const ids = Object.keys(storedCart);
        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                setCart(getStoredCartProducts(data));
            })
    }, [])

    const removeCartProduct = (id) => {
        const restCartProducts = cart.filter(product => product._id !== id);
        setCart(restCartProducts);
        // 
        removeFromDb(id);
    }

    return (
        <div className='shop order-shop'>
            <div className='order-products-wrapper'>
                {
                    cart.map(product => <OrderProduct
                        key={product._id}
                        product={product}
                        removeCartProduct={removeCartProduct}
                    ></OrderProduct>
                    )
                }
                {
                    cart.length === 0 && <h2>No Item's found in Orders. Please <Link to='/shop'>Continue Shopping</Link>.</h2>
                }
            </div>
            <div className="cart-wrapper order-cart-wrapper">
                <Cart cart={cart} setCart={setCart}>
                    <Link to="/shipping">
                        <button className='btn review-order-btn'>Procced Shipping <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;