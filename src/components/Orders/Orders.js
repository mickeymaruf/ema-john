import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const { cartProducts } = useLoaderData();
    const [cart, setCart] = useState(cartProducts);

    return (
        <div>
            {
                cart.map(product => <OrderProduct key={product.id} product={product} />)
            }
        </div>
    );
};

const OrderProduct = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    )
}

export default Orders;