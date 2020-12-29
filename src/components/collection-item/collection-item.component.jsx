import React from "react";
import { addItem } from "../../redux/cart/cart.actions";
import { CustomButtonContainer } from "../custom-button/custom-button.styles";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  Name,
  Price,
} from "./collection-item.styles";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl}></ImageContainer>
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{`${price}$`}</Price>
      </CollectionFooterContainer>
      <CustomButtonContainer itemButton onClick={() => addItem(item)}>
        Add To Cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
