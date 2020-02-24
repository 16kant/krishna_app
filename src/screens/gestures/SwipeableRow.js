import React, { useRef, useState } from "react";
import { StyleSheet, Text, I18nManager, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default SwipeableRow = props => {
  const [deleted, setDeleted] = useState(false);
  const swipeableRowRef = useRef();
  const { item, dispatch, onEdit } = props;
  const renderLeftActions = (progress, dragX) => {
    return (
      <View style={styles.leftActions}>
        {renderLeftAction({
          text: "status",
          color: "#097507",
          onPress: onToggle
        })}
        {renderLeftAction({
          text: "Edit",
          color: "#f5b042",
          onPress: () => onEdit(item)
        })}
      </View>
    );
  };
  const renderRightActions = (progress, dragX) => {
    return deleted ? null : (
      <RectButton style={styles.rightActions} onPress={close}>
        <Text style={[styles.actionText]}>Delete</Text>
      </RectButton>
    );
  };
  const renderLeftAction = ({ text, color, onPress }) => {
    if (text === "status") {
      text = item.complete ? "Unmark" : "Mark";
    }
    return (
      <RectButton
        style={[styles.leftAction, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={[styles.actionText]}>{text}</Text>
      </RectButton>
    );
  };

  const onToggle = () => {
    swipeableRowRef.current.close();
    dispatch({ type: "TOOGLE_TODO", payload: item });
  };

  const close = () => swipeableRowRef.current.close();

  const onSwipeableRightWillOpen = () => {
    setDeleted(true);
    dispatch({ type: "DELETE_TODO", payload: item });
  };

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={1}
      overshootLeft={false}
      leftThreshold={60}
      rightThreshold={80}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={onSwipeableRightWillOpen}
      onSwipeableWillClose={() => setDeleted(false)}
    >
      {props.children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftActions: {
    width: "45%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  rightActions: {
    flex: 1,
    backgroundColor: "#dd2c00",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10
  },
  leftAction: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%"
  }
});
