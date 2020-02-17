import React, { useRef } from "react";
import { StyleSheet, Text, I18nManager } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default SwipeableRow = props => {
  const swipeableRowRef = useRef();
  const renderLeftActions = (progress, dragX) => {
    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <Text style={[styles.actionText]}>Archive</Text>
      </RectButton>
    );
  };
  const renderRightActions = (progress, dragX) => {
    return (
      <RectButton style={styles.rightAction} onPress={close}>
        <Text style={[styles.actionText]}>Delete</Text>
      </RectButton>
    );
  };
  const close = () => {
    swipeableRowRef.current.close();
  };

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      {props.children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse"
  },
  rightAction: {
    flex: 1,
    backgroundColor: "#dd2c00",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row"
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10
  }
});
