import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import styles from "./src/styles";
import { useScreens } from "react-native-screens";
import BottomTabNavigator from "./src/screens/bottomTabNavigator";
import DrawerNavigator from "./src/screens/drawerNavigator";
import Login from "./src/screens/login/login";
import Register from "./src/screens/register/register";

useScreens();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#000"} barStyle={"light-content"} />
        {/* <Login /> */}
        <Register />
        {/* <DrawerNavigator /> */}
        {/* <BottomTabNavigator /> */}
      </View>
    );
  }
}
