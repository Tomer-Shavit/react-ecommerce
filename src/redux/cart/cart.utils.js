export const addItemToCart = (cartItems, cartItemToAdd) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (itemExists) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const item = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (item.quantity === 1) {
    return clearCartItem(cartItems, item);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
