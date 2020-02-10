import React from "react";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./home";
import PanTest2 from "./panTest2";
import PanTest from "./panTest";
import MyDrawerNavigator from "./drawerNavigator";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: MyDrawerNavigator },
    PanTest: { screen: PanTest },
    PanTest2: { screen: PanTest2 }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home`;
        }
        return (
          <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
export default BottomTabNavigator;
