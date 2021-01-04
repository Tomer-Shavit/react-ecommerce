import React, { useEffect } from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import { CollectionsOverviewContainer } from "../../collections-overview/colleciton-overview.container";
import { CollectionPageContainer } from "../collection-page/collection-page.container";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shoppage">
      <Route
        exact
        path={`${match.path}/`}
        component={CollectionsOverviewContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      ></Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
