import ShopActionTypes from "./shop.types";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCHING_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCHING_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (error) => ({
  type: ShopActionTypes.FETCHING_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(async (snapShot) => {
        const collectionMap = convertSnapshotToMap(snapShot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err)));
  };
};
