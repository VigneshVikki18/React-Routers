import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
