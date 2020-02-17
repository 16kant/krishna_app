import React from "react";
import { View, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";

import DrawerHeader from "../images/under_construction.png";
import Home from "./home";
import TapGesture from "./gestures/TapGesture";
import LayoutAnimationExample from "./gestures/LayoutAnimationExample";
import PanGesture from "./gestures/PanGesture";
import RotationGesture from "./gestures/RotationGesture";
import FlingGesture from "./gestures/FlingGesture";
import SwipeableList from "./gestures/SwipeableList";
import ImageViewerExample from "./gestures/ImageViewerExample";
import DrawerLayoutExample from "./gestures/DrawerLayoutExample";

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
    },
    DrawerLayoutExample: {
      screen: DrawerLayoutExample
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
