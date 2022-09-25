import React from 'react';
import './Cart.css'

const Cart = ({cart, totalPrice}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h3>Grand Total: ${totalPrice}</h3>
            </div>
        </div>
    );
};

export default Cart;