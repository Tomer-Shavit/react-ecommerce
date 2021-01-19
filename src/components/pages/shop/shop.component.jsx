import React, { lazy, Suspense } from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
// import { CollectionsOverviewContainer } from "../../collections-overview/colleciton-overview.container";
// import { CollectionPageContainer } from "../collection-page/collection-page.container";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../../redux/shop/shop.actions";
import Spinner from "../../spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../collections-overview/colleciton-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection-page/collection-page.container")
);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shoppage">
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
