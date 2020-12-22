import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => (
  <div className="cart-item">
    <img src={imageUrl} className="image" alt="item"></img>
    <div className="item-details">
      <span className="item-name">{name}</span>
      <span className="item-price">{`${quantity} X ${price}$`}</span>
    </div>
  </div>
);

export default CartItem;
