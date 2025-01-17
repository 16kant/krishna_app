import {Component} from 'react';
import {isString} from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import {isValidEmail, checkEmpty} from '../../utils/validations';
// import callApi from '../../utils/apiCaller';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: {
        emailError: '',
        passwordError: ''
      }
    };
  }

  changeText = (value, name) => {
    this.state.user[name] = value;
    this.setState({});
  };

  emptyErrorField = field => {
    this.state.error[field] = '';
    this.setState({});
  };

  handleChange = (value, name, errorField) => {
    if (this.state.error[errorField] !== '') {
      this.emptyErrorField(errorField);
    }
    this.changeText(value, name);
  };

  validateAllFields = () => {
    const email = isValidEmail(this.state.user.email.trim().toLowerCase());

    let password = checkEmpty(this.state.user.password);

    if (email.valid === true && password === true) {
      return true;
    }
    password = isString(password) && password.replace('{{Field}}', 'Password');
    this.state.error.emailError = email.message;
    this.state.error.passwordError = password;
    this.setState({});
    return false;
  };

  onSubmit = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('AppStack');
    // if (this.validateAllFields()) {
    //   callApi()
    //     .then(response => console.warn("callapi response", response))
    //     .catch(error => console.warn("error", error));
    // }
  };
}
