import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const totalPrice = cart.reduce((prev, item) => item.price + prev, 0);
    const shipping = cart.reduce((prev, item) => item.shipping + prev, 0);
    const tax = parseFloat(((totalPrice / 100) * 10).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div>
            <h2>Order Summary</h2>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
        </div>
    );
};

export default Cart;