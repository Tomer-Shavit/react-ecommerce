import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../../redux/shop/shop.actions";
import {
  selectIsFetching,
  selectCollectionLoaded,
} from "../../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }
  render() {
    const { match, isFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shoppage">
        <Route
          exact
          path={`${match.path}/`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        ></Route>
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isCollectionLoaded: selectCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
