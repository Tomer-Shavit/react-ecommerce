import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span className="header-title">Product</span>
      </div>
      <div className="header-block">
        <span className="header-title">Description</span>
      </div>
      <div className="header-block">
        <span className="header-title">Quantity</span>
      </div>
      <div className="header-block">
        <span className="header-title">Price</span>
      </div>
      <div className="header-block">
        <span className="header-title">Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <div className="cart-item">{cartItem.name}</div>
    ))}
    <span className="total">{total ? `$${total}` : null}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
