import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from "./authLoadingScreen";
import AuthStack from "./authStack";
import BottomTabNavigator from "./bottomTabNavigator";
import MyDrawerNavigator from "./drawerNavigator";

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStack,
    AppStack: BottomTabNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(SwitchNavigator);
