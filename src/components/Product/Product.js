import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id, name, img, price, seller, ratings} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-details">
                <h3 className='product-title'>{name}</h3>
                <h4 className='product-price'>Price: ${price}</h4>

                <small>Manufacturer : {seller}</small><br />
                <small className='mb-2'>Rating : {ratings} stars</small>
            </div>
            <p onClick={()=> props.addToCart(id)} className='btn-cart'>Add to Cart</p>
        </div>
    );
};

export default Product;