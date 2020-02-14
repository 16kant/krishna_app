import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { useScreens } from "react-native-screens";
import { Provider } from "react-redux";
import store from "./src/redux";
import SwitchNavigator from "./src/screens/switchNavigator";
import BottomTabNavigator from "./src/screens/bottomTabNavigator";
import DrawerNavigator from "./src/screens/drawerNavigator";
import Login from "./src/screens/login/login";
import Register from "./src/screens/register/register";
import AuthStack from "./src/screens/authStack";
// useScreens();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} backgroundColor="black" />
          <SwitchNavigator />
          {/* <DrawerNavigator /> */}
          {/* <BottomTabNavigator /> */}
          {/* <AuthStack /> */}
        </View>
      </Provider>
    );
  }
}
