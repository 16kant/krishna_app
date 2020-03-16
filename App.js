import React, {useContext, useReducer} from 'react';
import {StatusBar, View, UIManager, Platform} from 'react-native';
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
