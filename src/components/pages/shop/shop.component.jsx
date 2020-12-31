import React from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import { CollectionsOverviewContainer } from "../../collections-overview/colleciton-overview.container";
import { CollectionPageContainer } from "../collection-page/collection-page.container";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }
  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
