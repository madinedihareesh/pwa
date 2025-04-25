// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 px-4">
      <Link className="navbar-brand fw-bold" to="/">eShop</Link>
      <div className="ms-auto d-flex align-items-center">
        <Link to="/cart" className="btn btn-outline-primary position-relative">
          🛒 Cart
          {totalItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
