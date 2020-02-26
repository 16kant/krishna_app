import React, { useRef, useState, useCallback, cloneElement } from "react";
import { StyleSheet, View, LayoutAnimation } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";

const SwipeableRow = props => {
  const [deleted, setDeleted] = useState(false);
  const swipeableRowRef = useRef();
  const { item, dispatch, onEdit, setCurrentTodo } = props;

  const renderRightActions = (progress, dragX) => {
    return deleted ? null : (
      <RectButton
        style={styles.rightActions}
        onPress={() => swipeableRowRef.current.close()}
      >
        <Icon
          name={"delete-forever"}
          size={30}
          color={"#fff"}
          style={{ marginHorizontal: 10 }}
        />
      </RectButton>
    );
  };

  const renderLeftActions = (progress, dragX) => {
    return (
      <View style={styles.leftActions}>
        {renderLeftAction({
          icon: "status",
          color: "#86888a",
          onPress: onToggle
        })}
        {renderLeftAction({
          icon: "edit",
          color: "#0a64ad",
          onPress: () => {
            swipeableRowRef.current.close();
            onEdit(item);
          }
        })}
      </View>
    );
  };

  const renderLeftAction = ({ icon, color, onPress }) => {
    if (icon === "status") {
      icon = item.complete ? "cancel" : "check-circle";
    }
    return (
      <RectButton
        style={[styles.leftAction, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Icon
          name={icon}
          size={30}
          color={"#fff"}
          style={{ marginHorizontal: 10 }}
        />
      </RectButton>
    );
  };

  const onToggle = useCallback(() => {
    swipeableRowRef.current.close();
    dispatch({ type: "TOOGLE_TODO", payload: item });
  }, [swipeableRowRef]);

  const onSwipeableRightOpen = useCallback(() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        300,
        LayoutAnimation.Types.easeOut,
        LayoutAnimation.Properties.scaleY
      )
    );
    setDeleted(true);
    dispatch({ type: "DELETE_TODO", payload: item });
  }, []);

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={1}
      overshootLeft={false}
      leftThreshold={10}
      rightThreshold={60}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={onSwipeableRightOpen}
      onSwipeableLeftOpen={() => setCurrentTodo(item)}
    >
      {cloneElement(props.children, {
        openLeft: () => swipeableRowRef.current.openLeft(),
        close: () => swipeableRowRef.current.close()
      })}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  rightActions: {
    flex: 1,
    backgroundColor: "#dd2c00",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  },
  leftActions: {
    width: "38%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  leftAction: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%"
  }
});

export default SwipeableRow;
