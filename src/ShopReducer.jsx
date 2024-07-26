export const initialState = {
  products: [],
  total: 0,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        total: payload,
      };
    default:
      throw new Error("unknown reducer");
  }
};

export default shopReducer;
