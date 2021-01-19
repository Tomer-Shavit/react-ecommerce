import { connect } from "react-redux";
import WithSpinner from "../../with-spinner/with-spinner.component";
import { compose } from "redux";
import { selectCollectionLoaded } from "../../../redux/shop/shop.selectors";
import CollectionPage from "./collection-page.component";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
