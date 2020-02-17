import React from "react";
import { View, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";

import DrawerHeader from "../images/under_construction.png";
import Home from "./home";
import TapGesture from "./animations/TapGesture";
import LayoutAnimationExample from "./animations/LayoutAnimationExample";
import PanGesture from "./animations/PanGesture";
import RotationGesture from "./animations/RotationGesture";
import FlingGesture from "./animations/FlingGesture";
import SwipeableList from "./animations/SwipeableList";
import ImageViewerExample from "./animations/ImageViewerExample";

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
    PanGesture: {
      screen: PanGesture
    },
    TapGesture: {
      screen: TapGesture
    },
    LayoutAnimationExample: {
      screen: LayoutAnimationExample
    },
    RotationGesture: {
      screen: RotationGesture
    },
    FlingGesture: {
      screen: FlingGesture
    },
    SwipeableList: {
      screen: SwipeableList
    }
    // ImageViewerExample: {
    //   screen: ImageViewerExample
    // },
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
