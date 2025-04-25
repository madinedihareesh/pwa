// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0 align-items-center">
                <div className="col-md-2">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-10">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-end">
                      <h6>₹{item.price * item.quantity}</h6>
                      <button className="btn btn-sm btn-danger mt-2" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ₹{total}</h4>
            <button className="btn btn-warning" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
