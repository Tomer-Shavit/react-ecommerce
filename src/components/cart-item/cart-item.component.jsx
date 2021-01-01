import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  ItemContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item"></ImageContainer>
    <ItemDetailsContainer>
      <ItemContainer>{name}</ItemContainer>
      <ItemContainer>{`${quantity} X ${price}$`}</ItemContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
