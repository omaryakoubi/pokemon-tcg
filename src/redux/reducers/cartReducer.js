import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART
} from "../actions/actionTypes";

const initialState = {
  cart: [],
  isCartOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((card) => card.id !== action.payload),
      };
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
};

export default cartReducer;
