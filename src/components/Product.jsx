import React, { useEffect, useState } from "react";
import useShop from "../ShopContext";

function Product({ product }) {
  const { addToCart, products, total, removeCart } = useShop();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isCart = products.filter((pro) => pro.id == product.id);
    console.log(isCart);
    if (isCart.length > 0) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products]);

  const handleAddToCart = () => {
    if (isInCart) {
      removeCart(product);
    } else {
      addToCart(product);
    }
  };
  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),  url(${product.urlImage}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="info" key={product.name}>
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <button
        className={`btn ${isInCart ? "btn-danger" : "btn-primary"}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "-" : " +"}
      </button>
    </div>
  );
}

export default Product;
