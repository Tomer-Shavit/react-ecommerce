import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearCartItem = (item) => ({
  type: cartActionTypes.CLEAR_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
