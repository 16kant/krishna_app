import React from "react";
import { View, Button, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import DrawerHeader from "../images/under_construction.png";
import Home from "./home";
import First from "./animations/first";
import Second from "./animations/second";
import Third from "./animations/third";

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: "#a3a199" }}>
    <Image source={DrawerHeader} style={{ height: 80, width: "100%" }} />
    <DrawerNavigatorItems {...props} />
  </View>
);

class MyNotificationsScreen extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: "Notifications"
  // };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Notifications: {
      screen: MyNotificationsScreen
    },
    First: {
      screen: First
    },
    Second: {
      screen: Second
    },
    Third: {
      screen: Third
    }
  },
  {
    initialRouteName: "First",
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

export default MyDrawerNavigator;
