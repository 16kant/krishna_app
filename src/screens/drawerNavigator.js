import React from "react";
import { View, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import DrawerHeader from "../images/under_construction.png";
import Home from "./home";
import First from "./animations/first";
import Second from "./animations/second";
import Third from "./animations/third";
import Fourth from "./animations/fourth";
import Fifth from "./animations/fifth";
import Sixth from "./animations/sixth";
const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: "#a3a199" }}>
    <Image source={DrawerHeader} style={{ height: 80, width: "100%" }} />
    <DrawerNavigatorItems {...props} />
  </View>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    First: {
      screen: First
    },
    // Second: {
    //   screen: Second
    // },
    Third: {
      screen: Third
    },
    Fourth: {
      screen: Fourth
    },
    Fifth: {
      screen: Fifth
    },
    Sixth: {
      screen: Sixth
    }
  },
  {
    initialRouteName: "Home",
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
