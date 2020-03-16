import React, {useContext, useReducer, useEffect} from 'react';
import {StatusBar, View, UIManager, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
// import {Provider} from 'react-redux';
// import store from './redux';
import SwitchNavigator from './navigators/switchNavigator';
import AppContext from './utils/context';
import UserContext from './utils/userContext';
import reducer from './utils/reducer';
import userReducer from './utils/userReducer';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const initialState = useContext(AppContext);
  const userInitialState = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  useEffect(async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    console.log('fcm Token>>>', fcmToken);
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);

      // Update a users messages list using AsyncStorage
      const currentMessages = await AsyncStorage.getItem('messages');
      const messageArray = JSON.parse(currentMessages);
      messageArray.push(remoteMessage.data);
      await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    });
  });

  return (
    // <Provider store={store}>
    <UserContext.Provider value={{userState, userDispatch}}>
      <AppContext.Provider value={{state, dispatch}}>
        <View style={{flex: 1}}>
          <StatusBar translucent={true} backgroundColor="transparent" />
          <SwitchNavigator />
        </View>
      </AppContext.Provider>
    </UserContext.Provider>
    // </Provider>
  );
};

export default App;
