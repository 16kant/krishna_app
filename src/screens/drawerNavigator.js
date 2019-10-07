import React from "react";
import { View, Button, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import BottomTabNavigator from "./bottomTabNavigator";
import DrawerHeader from "../images/under_construction.png";

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: "#a3a199" }}>
    <Image source={DrawerHeader} style={{ height: 80, width: "100%" }} />
    <DrawerNavigatorItems {...props} />
  </View>
);

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return <BottomTabNavigator />;
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications"
  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    // BottomTabNavigator: {
    //   screen: BottomTabNavigator
    // },
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    overlayColor: "#fff",
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeBackgroundColor: "#f5c816",
      activeTintColor: "#000",
      inactiveTintColor: "#000",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default createAppContainer(MyDrawerNavigator);
