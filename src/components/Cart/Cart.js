import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    let quantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    for(const product of cart){
        quantity += product.quantity;
        totalPrice += product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat(((totalPrice / 100) * 10).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;

    const navigate = useNavigate();
    return (
        <div>
            <h2>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
            <div>
                <button onClick={() => {
                    setCart([]);
                    deleteShoppingCart();
                }}
                className='btn clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <button onClick={() => navigate('/orders')} className='btn review-order-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Cart;