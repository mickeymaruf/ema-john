import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

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
            </div>
            <div className="cart-wrapper order-cart-wrapper">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;