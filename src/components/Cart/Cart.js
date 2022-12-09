import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let totalPrice = 0;
    let shipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((totalPrice * 10 / 100).toFixed(0));
    const grandTotal = totalPrice + shipping + tax;


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>

    );
};

export default Cart;