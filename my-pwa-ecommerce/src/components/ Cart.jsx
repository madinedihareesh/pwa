
import React from 'react';

const CartPage = () => {
  
  const cartItems = [
    {
      id: 1,
      title: 'Smartphone',
      price: 19999,
      quantity: 1,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      title: 'Bluetooth Headphones',
      price: 2999,
      quantity: 2,
      image: 'https://via.placeholder.com/100'
    }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="mb-4">Your Cart</h2>
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
                <h6>₹{item.price * item.quantity}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h4 className="text-end">Total: ₹{total}</h4>
    </div>
  );
};

export default CartPage;