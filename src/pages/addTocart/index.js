// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../../redux/slices/cart';

const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more products as needed
];

const Addtocart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>

            <div>
                <strong>Total Price:</strong> ${calculateTotalPrice()}
            </div>
        </div>
    );
};

export default Addtocart;
