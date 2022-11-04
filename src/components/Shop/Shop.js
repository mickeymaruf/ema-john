import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import getStoredCartProducts from '../../utilities/getStoredCartProducts';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState([]);
    const [cart, setCart] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const pages = Math.ceil(count / size);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.productsCount);
                setProducts(data.products);
            })
            .catch(err => console.log(err));
    }, [page, size]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const ids = Object.keys(storedCart);
        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                setCart(getStoredCartProducts(data));
            })
    }, [])

    const addToCart = (product) => {
        const isExistProduct = cart.find(p => p._id === product._id);
        let newCart;
        if (isExistProduct) {
            const rest = cart.filter(p => p._id !== isExistProduct._id);
            isExistProduct.quantity++;
            newCart = [...rest, isExistProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    // pagination

    return (
        <div className='shop'>
            <div className="products-wrapper">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-wrapper">
                <Cart cart={cart} setCart={setCart}>
                    <Link to="/orders">
                        <button className='btn review-order-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </Cart>
            </div>
            <div className="pagination">
                {
                    [...Array(pages).keys()].map(i => <button
                        className={`${page === i && 'selectedPage'}`}
                        key={i}
                        onClick={() => setPage(i)}
                    >
                        {i + 1}
                    </button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;