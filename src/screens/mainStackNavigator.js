import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./login/login";
import Register from "./register/register";


const MainStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(MainStackNavigator);
