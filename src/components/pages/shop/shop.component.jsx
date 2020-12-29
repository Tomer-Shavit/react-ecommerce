import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";
import { Route } from "react-router-dom";
import { updateCollections } from "../../../redux/shop/shop.actions";
import { connect } from "react-redux";
import {
  firestore,
  convertSnapshotToMap,
} from "../../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertSnapshotToMap(snapShot);
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
