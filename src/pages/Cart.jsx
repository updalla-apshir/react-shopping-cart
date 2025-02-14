import React from "react";
import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";

function Cart() {
  return (
    <div className="cart-container">
      <CartProducts />
      <Payment />
    </div>
  );
}

export default Cart;
