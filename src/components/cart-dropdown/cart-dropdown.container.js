import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartDropdown from "./cart-dropdown.component";
import { withRouter } from "react-router-dom";

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);
