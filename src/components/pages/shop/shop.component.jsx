import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => (
  <div className="shoppage">
    <Route
      exact
      path={`${match.path}/`}
      component={CollectionsOverview}
    ></Route>
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default ShopPage;
