import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  signInWithEmailStart,
  signInWithGoogleStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ signInWithEmailStart, signInWithGoogleStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailStart(email, password);
    setUserCredentials({ password: "", email: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          label="email"
          type="email"
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          name="password"
          value={password}
          label="password"
          type="password"
          handleChange={handleChange}
          required
        ></FormInput>
        <div className="btn-group">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={signInWithGoogleStart}
            signInWithGoogle
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
  signInWithEmailStart: (email, password) =>
    dispatch(signInWithEmailStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
