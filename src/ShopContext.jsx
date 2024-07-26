import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./ShopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedProducts = state.products.concat(product);
    calculatTotal(updatedProducts);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProducts,
      },
    });
  };

  const removeCart = (product) => {
    const updatedProducts = state.products.filter(
      (pro) => pro.id !== product.id
    );
    calculatTotal(updatedProducts);
    dispatch({
      type: "REMOVE_TO_CART",
      payload: { products: updatedProducts },
    });
  };

  const calculatTotal = (products) => {
    let total = products.reduce((acc, pro) => acc + parseFloat(pro.price), 0);
    total = parseFloat(total.toFixed(2)); // Ensuring the total is rounded and has two decimal places
    dispatch({
      type: "CALCULATE_TOTAL",
      payload: total,
    });
  };

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    removeCart,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export default useShop;
