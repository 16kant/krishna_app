import React, {useContext, useReducer} from 'react';
import {StatusBar, View, UIManager, Platform} from 'react-native';
// import {Provider} from 'react-redux';
// import store from './src/redux';
import SwitchNavigator from './src/screens/switchNavigator';
import AppContext from './utils/context';
import reducer from './utils/reducer';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <Provider store={store}>
    <AppContext.Provider value={{state, dispatch}}>
      <View style={{flex: 1}}>
        <StatusBar translucent={false} backgroundColor="black" />
        <SwitchNavigator />
      </View>
    </AppContext.Provider>
    // </Provider>
  );
};

export default App;
