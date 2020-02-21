import React, { useRef, useState } from "react";
import { StyleSheet, Text, I18nManager } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default SwipeableRow = props => {
  const [deleted, setDeleted] = useState(false);
  const swipeableRowRef = useRef();
  const { item, dispatch } = props;
  const renderLeftActions = (progress, dragX) => {
    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <Text style={[styles.actionText]}>
          {item.complete ? "Unmark" : "Mark"}
        </Text>
      </RectButton>
    );
  };
  const renderRightActions = (progress, dragX) => {
    return deleted ? null : (
      <RectButton style={styles.rightAction} onPress={close}>
        <Text style={[styles.actionText]}>Delete</Text>
      </RectButton>
    );
  };
  const close = () => {
    swipeableRowRef.current.close();
  };

  const onSwipeableLeftWillOpen = () => {
    close();
    dispatch({ type: "TOOGLE_TODO", payload: item });
  };

  const onSwipeableRightWillOpen = () => {
    setDeleted(true);
    // close();
    dispatch({ type: "DELETE_TODO", payload: item });
  };

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={1}
      overshootLeft={false}
      leftThreshold={140}
      rightThreshold={140}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftWillOpen={onSwipeableLeftWillOpen}
      onSwipeableRightOpen={onSwipeableRightWillOpen}
    >
      {props.children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    width: "24%",
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
