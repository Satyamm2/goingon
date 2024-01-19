import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../../redux/slices/cart";
// import { loadScript } from "react-dom-script-loader";

function Checkout() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const handleCheckout = async () => {
        // Add Razorpay payment integration logic here

        // Example: Call a function that initializes Razorpay
        await initializeRazorpay();

        // Clear the cart after successful payment
        dispatch(clearCart());
    };

    const initializeRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        // Create an instance of Razorpay
        const Razorpay = window.Razorpay;
        const razorpay = new Razorpay({
            key: 'rzp_test_FViTaNsOKBZAyt',
            amount: calculateTotalPrice() * 100, // Amount in paise
            currency: 'INR',
            name: 'Your Store Name',
            description: 'Payment for products',
            order_id: 'ORDER_ID_FROM_SERVER', // You need to create an order on your server
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
                // Add logic to handle the payment success on the server
            },
        });

        // Open the Razorpay payment form
        razorpay.open();
    };


    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    return (
        <>
            <div>
                <h1>Checkout</h1>
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

                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </>
    );
};

export default Checkout;