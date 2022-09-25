import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const {name, img, price, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-details">
                <h3 className='product-title'>{name}</h3>
                <h4 className='product-price'>Price: ${price}</h4>

                <small>Manufacturer : {seller}</small><br />
                <small className='mb-2'>Rating : {ratings} stars</small>
            </div>
            <button onClick={()=> addToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faCartPlus}/>
            </button>
        </div>
    );
};

export default Product;