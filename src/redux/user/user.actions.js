import userTypes from "./user.types";

export const signInWithGoogleStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signInWithEmailStart = (emailAndPassword) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
