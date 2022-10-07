import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderProduct.css'

const OrderProduct = ({ product, removeCartProduct }) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='ordered-product'>
            <img src={img} alt="" />
            <div>
                <p className='order-product-title'>{name}</p>
                <small>
                    Price: <span className="text-yellow">${price}</span> <br />
                    Quantity : {quantity}
                </small>
            </div>
            <button onClick={() => removeCartProduct(id)} className='order-product-remove-btn'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    )
}

export default OrderProduct;