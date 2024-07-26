import React, { useState } from "react";
import { Link } from "react-router-dom";
import useShop from "../ShopContext";

function Header() {
  const { products } = useShop();
  const [cart, setCart] = useState(5);
  return (
    <div className="menu">
      <Link to="/" className="logo">
        Reactify
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <Link to="/cart">
        <span className="cart">{products.length}</span>
      </Link>
    </div>
  );
}

export default Header;
