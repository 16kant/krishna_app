import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthComponent from "./AuthComponent/auth";
import LoginAuthenticate from "./tabNavigator/loginAuthenticate";
import MainStack from "./MainStack";
import Home from "./home";

const SwitchNavigator = createSwitchNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);
export default SwitchNavigator;
