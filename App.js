import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { useScreens } from "react-native-screens";
import BottomTabNavigator from "./src/screens/bottomTabNavigator";
import DrawerNavigator from "./src/screens/drawerNavigator";
import Login from "./src/screens/login/login";
import Register from "./src/screens/register/register";
import MainStackNavigator from "./src/screens/mainStackNavigator";
useScreens();

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor="transparent"/>
        {/* <StatusBar hidden /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <DrawerNavigator /> */}
        {/* <BottomTabNavigator /> */}
        <MainStackNavigator />
      </View>
    );
  }
}
