import React, { Component } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";

const DraggableBox = props => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const lastOffset = { x: 0, y: 0 };
  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY
        }
      }
    ]
    // { useNativeDriver: true }
  );
  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastOffset.x += event.nativeEvent.translationX;
      lastOffset.y += event.nativeEvent.translationY;
      translateX.setOffset(lastOffset.x);
      // translateX.setValue(0);
      translateY.setOffset(lastOffset.y);
      // translateY.setValue(0);
    }
  };

  return (
    <PanGestureHandler
      {...props}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateX: translateX }, { translateY: translateY }]
          },
          props.boxStyle
        ]}
      />
    </PanGestureHandler>
  );
};

export default PanGesture = () => {
  return (
    <View style={styles.scrollView}>
      <DraggableBox />
    </View>
  );
};

PanGesture.navigationOptions = {
  drawerLabel: "PanGestureHandler"
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: "center",
    backgroundColor: "plum",
    margin: 10,
    zIndex: 200
  }
});
