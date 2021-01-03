import React from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
      passwordMatch: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmedPassword) {
      alert("Passwords didn't matched");
      return;
    }

    signUpStart({ email, password, displayName });

    this.setState({
      displayName: "",
      password: "",
      email: "",
      confirmedPassword: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () =>
      event.target.name === "confirmedPassword" ? this.passwordMatch() : ""
    );
  };

  passwordMatch = () => {
    if (
      this.state.password === this.state.confirmedPassword &&
      this.state.password
    ) {
      return this.setState({ passwordMatch: true });
    } else this.setState({ passwordMatch: false });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Sign Up</h2>
        <form className="sign-up-form">
          <FormInput
            type="text"
            label="Name"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            passwordMatch={this.state.passwordMatch}
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="Confirm Password"
            passwordMatch={this.state.passwordMatch}
            name="confirmedPassword"
            value={confirmedPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" onClick={this.handleSubmit}>
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
