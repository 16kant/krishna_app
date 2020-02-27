import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Home from '../screens/home';
import PanTest2 from '../screens/panTest2';
// import PanTest from '../screens/panTest';
import MyDrawerNavigator from './drawerNavigator';
import SwipeableList from '../screens/gestures/SwipeableList';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: MyDrawerNavigator},
    Todos: {screen: SwipeableList},
    // PanTest: { screen: PanTest },
    PanTest2: {screen: PanTest2}
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;

        let iconName;

        if (routeName === 'Home') {
          iconName = 'home';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={28} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default BottomTabNavigator;
