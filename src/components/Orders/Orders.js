import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const { cartProducts } = useLoaderData();
    const [cart, setCart] = useState(cartProducts);
    const removeCartProduct = (id) => {
        const restCartProducts = cart.filter(product => product.id !== id);
        setCart(restCartProducts);
        // 
        removeFromDb(id);
    }

    return (
        <div className='shop order-shop'>
            <div className='order-products-wrapper'>
                {
                    cart.map(product => <OrderProduct
                        key={product.id}
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