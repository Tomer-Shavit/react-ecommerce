import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  signInWithEmailStart,
  signInWithGoogleStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { signInWithEmailStart } = this.props;
    signInWithEmailStart(email, password);
    this.setState({ password: "", email: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { signInWithGoogleStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            label="email"
            type="email"
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="password"
            value={this.state.password}
            label="password"
            type="password"
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
  signInWithEmailStart: (email, password) =>
    dispatch(signInWithEmailStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
