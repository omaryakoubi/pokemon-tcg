import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from "./actionTypes";

export const addToCart = (card) => {
  return {
    type: ADD_TO_CART,
    payload: card,
  };
};

export const removeFromCart = (cardId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cardId,
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};
