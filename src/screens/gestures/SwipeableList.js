import React, { useContext, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Animated,
  Dimensions
} from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import SwipeableRow from "./SwipeableRow";
import TodosContext from "../../utils/context";
import Foundation from "react-native-vector-icons/Foundation";
import Icon from "react-native-vector-icons/MaterialIcons";

export default SwipeableList = props => {
  const { state, dispatch } = useContext(TodosContext);
  const [expanded, setExpanded] = useState(false);
  const [scale] = useState(new Animated.Value(0));
  const inputRef = useRef();
  const { width } = Dimensions.get("screen");

  useEffect(() => {
    if (expanded) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 200
      }).start();
      inputRef.current.focus();
    } else {
      Animated.timing(scale, {
        toValue: 0,
        duration: 200
      }).start();
    }
  }, [expanded]);

  const handleSubmit = ({ nativeEvent }) => {
    dispatch({ type: "ADD_TODO", payload: nativeEvent.text });
  };

  const InputField = () => (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 20,
          right: 15,
          flexDirection: "row",
          backgroundColor: "rgba(255,255,255,0.9)",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          width: 60,
          borderWidth: 4,
          borderColor: "rgba(255,0,0,0.5)",
          borderRadius: 30,
          elevation: 10
        },
        {
          // opacity: scale.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: [0, 1]
          // }),
          // transform: [
          //   {
          //     scale: scale.interpolate({
          //       inputRange: [0, 1],
          //       outputRange: [0, 1]
          //     })
          //   }
          // ]
          width: scale.interpolate({
            inputRange: [0, 1],
            outputRange: [60, width - 30]
          })
        }
      ]}
    >
      {expanded && (
        <TextInput
          ref={inputRef}
          placeholder={"Add TODO"}
          onSubmitEditing={handleSubmit}
          style={{ fontSize: 18, flex: 1, marginRight: 45, marginLeft: 15 }}
        />
      )}
      {/* <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Icon name={"close"} size={25} color={"#777"} />
      </TouchableOpacity> */}
    </Animated.View>
  );

  const AddButton = () => {
    const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight);
    return (
      <AnimatedButton
        style={[
          {
            position: "absolute",
            top: 20,
            right: 15,
            flexDirection: "row",
            width: 60,
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            borderRadius: 30,
            elevation: 10
          },
          {
            // opacity: scale.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: [1, 0]
            // }),
            transform: [
              {
                rotate: scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "-45deg"]
                })
              }
            ]
          }
        ]}
        onPress={() => setExpanded(!expanded)}
      >
        <Icon
          name={"add"}
          size={28}
          color={expanded ? "#777" : "rgba(255,0,0,0.5)"}
        />
      </AnimatedButton>
    );
  };

  const Row = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => alert(item.text)}>
      <Text
        style={[
          styles.fromText,
          item.complete && { textDecorationLine: "line-through", color: "#000" }
        ]}
      >
        {item.text}
      </Text>
    </RectButton>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={state.todos}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <SwipeableRow dispatch={dispatch} item={item}>
            <Row item={item} />
          </SwipeableRow>
        )}
        keyExtractor={(item, index) => `message ${index}`}
      />
      <InputField />
      <AddButton />
    </View>
  );
};

SwipeableList.navigationOptions = {
  // drawerLabel: "Swipeable"
  tabBarIcon: ({ focused, tintColor }) => {
    return <Foundation name={"clipboard-notes"} size={28} color={tintColor} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectButton: {
    flex: 1,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#1778ff",
    alignItems: "center"
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
    letterSpacing: 1.5,
    color: "#fff"
  },
  messageText: {
    color: "#999",
    backgroundColor: "transparent"
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#999",
    fontWeight: "bold"
  }
});
