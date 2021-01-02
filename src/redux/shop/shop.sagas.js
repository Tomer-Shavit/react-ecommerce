import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.utils";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertSnapshotToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCHING_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
