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
