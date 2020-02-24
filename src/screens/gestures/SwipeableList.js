import React, { useContext, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Dimensions,
  ScrollView,
  FlatList,
  Keyboard,
  SafeAreaView
} from "react-native";
// import Animated from 'react-native-reanimated'
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import SwipeableRow from "./SwipeableRow";
import TodosContext from "../../utils/context";
import Foundation from "react-native-vector-icons/Foundation";
import Icon from "react-native-vector-icons/MaterialIcons";

export default SwipeableList = props => {
  const { state, dispatch } = useContext(TodosContext);
  const [expanded, setExpanded] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [scale] = useState(new Animated.Value(0));
  const listRef = useRef();
  const { width } = Dimensions.get("screen");

  useEffect(() => {
    expanded
      ? Animated.spring(scale, {
          toValue: 1
        }).start()
      : Animated.spring(scale, {
          toValue: 0
        }).start();
  }, [expanded]);

  useEffect(() => {
    const keyboardShowListner = Keyboard.addListener(
      "keyboardWillShow",
      keyboardDidShow
    );

    return () => {
      keyboardShowListner.remove();
    };
  }, []);

  const keyboardDidShow = () => {
    console.log("current>>>", listRef.current.scrollToIndex);
    // if (currentTodo.id) {
    // const index = state.todos.findIndex(t => t.id === currentTodo.id);
    // listRef.current.scrollToIndex({ index: 7 });
    // }
  };

  const addTodo = ({ nativeEvent }) => {
    setExpanded(false);
    dispatch({ type: "ADD_TODO", payload: nativeEvent.text });
  };

  const updateTodo = ({ nativeEvent }) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: currentTodo.id, text: nativeEvent.text }
    });
    setCurrentTodo({});
  };

  const onEdit = item => {
    setCurrentTodo(item);
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
          width: scale.interpolate({
            inputRange: [0, 1],
            outputRange: [60, width - 30]
          })
        }
      ]}
    >
      {expanded && (
        <TextInput
          placeholder={"Add TODO"}
          onSubmitEditing={addTodo}
          autoFocus={true}
          style={{ fontSize: 18, flex: 1, marginRight: 45, marginLeft: 15 }}
        />
      )}
    </Animated.View>
  );

  const AddButton = () => {
    const AnimatedButton = Animated.createAnimatedComponent(BorderlessButton);
    return (
      <AnimatedButton
        style={[
          styles.addButton,
          {
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

  const EditBox = ({ item }) => (
    <View style={styles.editBox}>
      <TextInput
        onSubmitEditing={updateTodo}
        selectTextOnFocus={true}
        autoFocus={true}
        style={{ fontSize: 18, flex: 1, marginRight: 15 }}
      />
      <BorderlessButton onPress={() => setCurrentTodo({})}>
        <Icon name={"clear"} size={28} color={"#f00"} />
      </BorderlessButton>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <FlatList
        style={{ flex: 1, backgroundColor: "red" }}
        data={state.todos}
        ref={listRef}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={
          ({ item, index }) => <EditBox item={item} />

          // currentTodo.id === item.id ? (
          //     <EditBox item={item} />
          // ) : (
          //     <SwipeableRow dispatch={dispatch} item={item} onEdit={onEdit}>
          //       <Row item={item} />
          //     </SwipeableRow>
          // )
        }
        keyExtractor={(item, index) => `message ${index}`}
      />
      {/* </ScrollView> */}
      <InputField />
      <AddButton />
    </SafeAreaView>
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
  },
  editBox: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 15,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    elevation: 4,
    borderColor: "rgba(255,0,0,0.5)",
    alignItems: "center"
  },
  addButton: {
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
  }
});
