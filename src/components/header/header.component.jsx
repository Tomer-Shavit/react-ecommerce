import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
} from "./header.styles";

import { CartDropdownContainer } from "../cart-dropdown/cart-dropdown.container";
import CartIcon from "../cart-icon/cart-icon.component";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
      <OptionLinkContainer to="/shop">CONTACT</OptionLinkContainer>
      {currentUser ? (
        <OptionLinkContainer as="div" onClick={signOut}>
          SIGN OUT
        </OptionLinkContainer>
      ) : (
        <OptionLinkContainer to="/sign-in">SIGN IN</OptionLinkContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdownContainer />}
  </HeaderContainer>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
