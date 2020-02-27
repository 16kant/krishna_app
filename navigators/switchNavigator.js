import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import AuthLoadingScreen from '../screens/authLoadingScreen';
import AuthStack from '../screens/authStack';
import BottomTabNavigator from './bottomTabNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStack,
    AppStack: BottomTabNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(SwitchNavigator);
