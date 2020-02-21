import React, { useContext, useReducer } from "react";
import { StatusBar, View, UIManager } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux";
import SwitchNavigator from "./src/screens/switchNavigator";
import TodosContext from "./src/utils/context";
import reducer from "./src/utils/reducer";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <Provider store={store}>
    <TodosContext.Provider value={{ state, dispatch }}>
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} backgroundColor="black" />
        <SwitchNavigator />
      </View>
    </TodosContext.Provider>
    // </Provider>
  );
};

export default App;
