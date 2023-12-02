import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Your Logo
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/cart" className="hover:text-gray-300">
              Cart
            </Link>
            <Link to="/checkout" className="hover:text-gray-300">
              Checkout
            </Link>
            <Link to="/admin" className="hover:text-gray-300">
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
