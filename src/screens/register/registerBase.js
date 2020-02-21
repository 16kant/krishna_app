import React, { Component } from "react";
import {
  isValidEmail,
  isValidPassword,
  isValidConfirmPassword,
  checkEmpty
} from "./../../utils/validations";
import { isString } from "lodash";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        username: "",
        fullname: "",
        password: "",
        confirmPassword: ""
      },
      error: {
        fullnameError: "",
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
      }
    };
  }

  changeText = (value, name) => {
    this.state.user[name] = value;
    this.setState({});
  };

  emptyErrorField = field => {
    this.state.error[field] = "";
    this.setState({});
  };

  handleChange = (value, name, errorField) => {
    if (this.state.error[errorField] !== "") {
      this.emptyErrorField(errorField);
    }
    this.changeText(value, name);
  };

  onSubmit = () => {};

  validateAllFields = () => {
    let fullname = checkEmpty(this.state.user.fullname);
    let username = checkEmpty(this.state.user.username);
    let email = isValidEmail(this.state.user.email.trim().toLowerCase());
    let password = isValidPassword(this.state.user.password);
    let confirmPassword = isValidConfirmPassword(
      this.state.user.password,
      this.state.user.confirmPassword
    );
    if (
      fullname === true &&
      username === true &&
      email.valid === true &&
      password === true &&
      confirmPassword === true
    ) {
      return true;
    }
    fullname = isString(fullname) && fullname.replace("{{Field}}", "Full Name");
    username = isString(username) && username.replace("{{Field}}", "User Name");
    this.state.error.emailError = email.message;
    this.state.error.passwordError = password;
    this.state.error.confirmPasswordError = confirmPassword;
    this.state.error.fullnameError = fullname;
    this.state.error.usernameError = username;
    this.setState({});
    return false;
  };
}
