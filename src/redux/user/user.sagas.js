import { takeLatest, call, put, all } from "redux-saga/effects";
import userTypes from "./user.types";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import { signInSuccess, signInFailure } from "./user.actions";

export function* getSnapshotFromAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogleStartAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmailStartAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogleStartAsync);
}

export function* onSignWithEmailStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmailStartAsync);
}

export function* userSagas() {
  yield all([call(onSignInWithGoogleStart), call(onSignWithEmailStart)]);
}
