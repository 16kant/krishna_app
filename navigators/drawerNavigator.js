import React from 'react';
import {View, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from 'react-navigation-drawer';

import Images from '../assets/images';
import Home from '../screens/home';
import TapGesture from '../screens/gestures/TapGesture';
import LayoutAnimationExample from '../screens/gestures/LayoutAnimationExample';
import PanGesture from '../screens/gestures/PanGesture';
import RotationGesture from '../screens/gestures/RotationGesture';
import FlingGesture from '../screens/gestures/FlingGesture';
// import SwipeableList from "../screens/gestures/SwipeableList";
// import ImageViewerExample from '../screens//ImageViewerExample';
import First from '../screens/animations/first';

const CustomDrawerContentComponent = props => (
  <View style={{flex: 1, backgroundColor: '#a3a199'}}>
    <Image
      source={Images.underConstruction}
      style={{height: 80, width: '100%'}}
    />
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
    // SwipeableList: {
    //   screen: SwipeableList
    // },
    // ImageViewerExample: {
    //   screen: ImageViewerExample
    // },
    First: {
      screen: First
    }
  },
  {
    initialRouteName: 'Home',
    overlayColor: '#fff',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeBackgroundColor: '#f5c816',
      activeTintColor: '#000',
      inactiveTintColor: '#000',
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
