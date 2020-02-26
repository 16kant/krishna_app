import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Dimensions,
  FlatList,
  LayoutAnimation
} from "react-native";
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import SwipeableRow from "./SwipeableRow";
import TodosContext from "../../utils/context";
import Foundation from "react-native-vector-icons/Foundation";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

const SwipeableList = props => {
  const { state, dispatch } = useContext(TodosContext);
  const [expanded, setExpanded] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [scale] = useState(new Animated.Value(0));
  const inputRef = useRef();

  useEffect(() => {
    Animated.spring(scale, {
      bounciness: 0,
      toValue: expanded ? 1 : 0
    }).start();
  }, [expanded]);

  const handleSubmit = useCallback(() => {
    setExpanded(false);
    const text = inputRef?.current?._lastNativeText;
    if (currentTodo) {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          id: currentTodo.id,
          text: text
        }
      });
      setCurrentTodo(null);
    } else {
      dispatch({ type: "ADD_TODO", payload: text });
    }
  }, [currentTodo]);

  const onAdd = useCallback(() => {
    setExpanded(!expanded);
    setCurrentTodo(null);
  }, [expanded]);

  const Row = ({ item, index, openLeft, close }) => {
    useEffect(() => {
      currentTodo?.id !== item.id && close();
    }, [currentTodo]);

    return (
      <RectButton style={styles.rectButton} onPress={openLeft}>
        <Text
          style={[
            styles.todoText,
            item.complete && {
              textDecorationLine: "line-through",
              color: "#888"
            }
          ]}
        >
          {index} {item.text}
        </Text>
      </RectButton>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={state.todos}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <SwipeableRow
            dispatch={dispatch}
            item={item}
            onEdit={() => setExpanded(true)}
            setCurrentTodo={setCurrentTodo}
          >
            <Row item={item} index={index} />
          </SwipeableRow>
        )}
        keyExtractor={(item, index) => `${item.id}`}
      />
      <Animated.View
        style={[
          styles.inputField,
          {
            width: scale.interpolate({
              inputRange: [0, 1],
              outputRange: [60, width - 30]
            })
          }
        ]}
      >
        {expanded && (
          <>
            <TextInput
              autoFocus={true}
              ref={inputRef}
              selectTextOnFocus={true}
              onSubmitEditing={handleSubmit}
              placeholder={currentTodo ? "" : "Add TODO"}
              defaultValue={currentTodo ? currentTodo.text : ""}
              style={{ fontSize: 18, flex: 1, marginLeft: 15 }}
            />
            <BorderlessButton
              onPress={handleSubmit}
              style={{
                transform: [
                  {
                    scale: scale.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1]
                    })
                  }
                ],
                opacity: scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }}
            >
              <Icon name={"check"} size={28} color={"rgba(0,0,255,0.5)"} />
            </BorderlessButton>
          </>
        )}
        <BorderlessButton
          onPress={onAdd}
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
        >
          <Icon name={"add"} size={30} color={"rgba(255,0,0,0.5)"} />
        </BorderlessButton>
      </Animated.View>
    </View>
  );
};

SwipeableList.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => {
    return <Foundation name={"clipboard-notes"} size={28} color={tintColor} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222"
  },
  rectButton: {
    flex: 1,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#222",
    alignItems: "center"
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth
  },
  todoText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
    letterSpacing: 1.5,
    color: "#fff"
  },
  addButton: {
    width: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  inputField: {
    position: "absolute",
    top: 20,
    right: 15,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.9)",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 60,
    width: 60,
    borderWidth: 4,
    borderColor: "rgba(255,0,0,0.5)",
    borderRadius: 30,
    elevation: 10
  }
});

export default SwipeableList;
