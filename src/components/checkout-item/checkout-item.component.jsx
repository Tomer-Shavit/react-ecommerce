import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  clearCartItem,
  removeCartItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, add, remove }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => remove(cartItem)}>
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => add(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">{`$${price}`}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10007;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearCartItem(cartItem)),
  add: (cartItem) => dispatch(addItem(cartItem)),
  remove: (cartItem) => dispatch(removeCartItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
