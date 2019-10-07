import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./home";
import Second from "./second";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Second: { screen: Second }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home`;
        }
        // } else if (routeName === "Settings") {
        //   iconName = `ios-options`;
        // }

        return (
          <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  }
);
export default createAppContainer(BottomTabNavigator);
