import React, {useContext, useReducer, useEffect} from 'react';
import {StatusBar, View, UIManager, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import messaging, {firebase} from '@react-native-firebase/messaging';
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

  useEffect(() => {
    const registerAppWithFCM = async () => {
      await messaging().registerForRemoteNotifications();
      console.log('registerAppWithFCM>>>');
    };
    registerAppWithFCM();

    const requestPermission = () => {
      const granted = messaging().requestPermission();
      console.log('granted>>>', granted);
    };
    requestPermission();

    const getToken = async () => {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      if (!fcmToken) {
        fcmToken = await messaging().getToken();
        if (fcmToken) {
          // user has a device token
          await AsyncStorage.setItem('fcmToken', fcmToken);
        }
      }
      console.log('fcm Token>>>', fcmToken);
    };
    getToken();

    // const notificationListener = firebase
    //   .notifications()
    //   .onNotification(notification => {
    //     const {title, body} = notification;
    //     showAlert(title, body);
    //     return () => {
    //       notificationListener;
    //     };
    //   });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);

      // Update a users messages list using AsyncStorage
      // const currentMessages = await AsyncStorage.getItem('messages');
      // const messageArray = JSON.parse(currentMessages);
      // messageArray.push(remoteMessage.data);
      // await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    });
  }, []);

  const showAlert = (title, body) => {
    Alert.alert(
      title,
      body,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false}
    );
  };

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
