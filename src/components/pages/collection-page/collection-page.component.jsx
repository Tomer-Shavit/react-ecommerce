import React from "react";
import CollectionItem from "../../collection-item/collection-item.component";
import "./collection-page.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return <div className="collection-page">Collection Page</div>;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
