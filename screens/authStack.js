import {createStackNavigator} from 'react-navigation-stack';

// import Login from './login/login';
import Register from './register/register';
import GoogleLogin from './googleLogin';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: GoogleLogin,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default AuthStack;
