import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: "",
    isPasswordMatch: false,
  });

  const {
    displayName,
    email,
    password,
    confirmedPassword,
    isPasswordMatch,
  } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert("Passwords didn't matched");
      return;
    }

    signUpStart({ email, password, displayName });

    setUserCredentials({
      displayName: "",
      password: "",
      email: "",
      confirmedPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    console.log("Fired");
    if (password === confirmedPassword && password) {
      return setUserCredentials({ ...userCredentials, isPasswordMatch: true });
    } else {
      setUserCredentials({ ...userCredentials, isPasswordMatch: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmedPassword]);

  return (
    <div className="sign-up">
      <h2 className="title">Sign Up</h2>
      <form className="sign-up-form">
        <FormInput
          type="text"
          label="Name"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          passwordMatch={isPasswordMatch}
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmedPassword"
          passwordMatch={isPasswordMatch}
          value={confirmedPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit" onClick={handleSubmit}>
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
