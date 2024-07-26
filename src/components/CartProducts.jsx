import React from "react";
import useShop from "../ShopContext";

function CartProducts() {
  const { products, removeCart, total } = useShop();
  return (
    <div className="cart-products">
      <h2>Cart Products </h2>
      {products.map((product) => (
        <div className="cart-product">
          <div className="cart-image">
            <img src={product.urlImage} alt={product.name} />
            <span>{product.name}</span>
          </div>
          <h5>${product.price}</h5>
          <div className="delete" onClick={() => removeCart(product)}>
            delete
          </div>
        </div>
      ))}
      <h2 className="total-price">Total Price: ${total}</h2>
    </div>
  );
}

export default CartProducts;
