import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";

export default First = () => {
  const { event, cond, eq, Value } = Animated;
  // const [state, setState] = useState(new Value(-1));
  let state = new Value(-1);

  const onStateChange = event([
    {
      nativeEvent: {
        state: state
      }
    }
  ]);
  // const onStateChange = ({ nativeEvent }) => {
  //   console.log("nativeEvent>>>>", nativeEvent);
  //   state = new Value(nativeEvent.state);
  // };
  const _opacity = cond(eq(state, State.BEGAN), 0.2, 1);
  // console.log("State", State, "state", state);
  return (
    <View style={styles.container}>
      <TapGestureHandler onHandlerStateChange={onStateChange}>
        <Animated.View style={[styles.box, { opacity: _opacity }]} />
      </TapGestureHandler>
    </View>
  );
};

First.navigationOptions = {
  drawerLabel: "First"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "tomato",
    width: 200,
    height: 200
  }
});
