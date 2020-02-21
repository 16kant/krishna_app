import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import {
  FlingGestureHandler,
  Directions,
  State
} from "react-native-gesture-handler";

const RowComponent = ({ flexDir, translateX, translateY }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: flexDir,
        width: "100%"
      }}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "tomato",
            transform: [
              {
                translateX: translateX
              },
              {
                translateY: translateY
              }
            ]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "yellow",
            transform: [
              {
                translateX: translateY
              },
              {
                translateY: translateX
              }
            ]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "green",
            transform: [
              {
                translateX: translateX
              },
              {
                translateY: translateY
              }
            ]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "blue",
            transform: [
              {
                translateX: translateY
              },
              {
                translateY: translateX
              }
            ]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "orange",
            transform: [
              {
                translateX: translateX
              },
              {
                translateY: translateY
              }
            ]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "purple",
            transform: [
              {
                translateX: translateY
              },
              {
                translateY: translateX
              }
            ]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "#6ba4ff",
            transform: [
              {
                translateX: translateX
              },
              {
                translateY: translateY
              }
            ]
          }
        ]}
      />
    </View>
  );
};

export default FlingGesture = () => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const onLeftFling = ({ nativeEvent }, offset) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateX, {
        toValue: translateX._value + offset
      }).start();
    }
  };

  const onRightFling = ({ nativeEvent }, offset) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateX, {
        toValue: translateX._value - offset
      }).start();
    }
  };

  const onUpFling = ({ nativeEvent }, offset) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateY, {
        toValue: translateY._value + offset
      }).start();
    }
  };

  const onDownFling = ({ nativeEvent }, offset) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateY, {
        toValue: translateY._value - offset
      }).start();
    }
  };

  return (
    <FlingGestureHandler
      direction={Directions.LEFT}
      onHandlerStateChange={ev => onLeftFling(ev, 80)}
    >
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => onRightFling(ev, 80)}
      >
        <FlingGestureHandler
          direction={Directions.UP}
          onHandlerStateChange={ev => onUpFling(ev, 80)}
        >
          <FlingGestureHandler
            direction={Directions.DOWN}
            onHandlerStateChange={ev => onDownFling(ev, 80)}
          >
            <View style={styles.container}>
              <View
                style={[
                  styles.container,
                  StyleSheet.absoluteFill,
                  { backgroundColor: "black" }
                ]}
              >
                <RowComponent
                  flexDir={"row-reverse"}
                  translateX={translateY}
                  translateY={translateX}
                />
                <RowComponent
                  flexDir={"row"}
                  translateX={translateX}
                  translateY={translateY}
                />
                <RowComponent
                  flexDir={"row-reverse"}
                  translateX={translateY}
                  translateY={translateX}
                />
                <RowComponent
                  flexDir={"row"}
                  translateX={translateX}
                  translateY={translateY}
                />
                <RowComponent
                  flexDir={"row-reverse"}
                  translateX={translateY}
                  translateY={translateX}
                />
                <RowComponent
                  flexDir={"row"}
                  translateX={translateX}
                  translateY={translateY}
                />
                <RowComponent
                  flexDir={"row-reverse"}
                  translateX={translateY}
                  translateY={translateX}
                />
                <RowComponent
                  flexDir={"row"}
                  translateX={translateX}
                  translateY={translateY}
                />
                <RowComponent
                  flexDir={"row-reverse"}
                  translateX={translateY}
                  translateY={translateX}
                />
                <RowComponent
                  flexDir={"row"}
                  translateX={translateX}
                  translateY={translateY}
                />
              </View>
              <RowComponent
                flexDir={"row"}
                translateX={translateX}
                translateY={translateY}
              />
              <RowComponent
                flexDir={"row-reverse"}
                translateX={translateY}
                translateY={translateX}
              />
              <RowComponent
                flexDir={"row"}
                translateX={translateX}
                translateY={translateY}
              />
              <RowComponent
                flexDir={"row-reverse"}
                translateX={translateY}
                translateY={translateX}
              />
              <RowComponent
                flexDir={"row"}
                translateX={translateX}
                translateY={translateY}
              />
              <RowComponent
                flexDir={"row-reverse"}
                translateX={translateY}
                translateY={translateX}
              />
              <RowComponent
                flexDir={"row"}
                translateX={translateX}
                translateY={translateY}
              />
              <RowComponent
                flexDir={"row-reverse"}
                translateX={translateY}
                translateY={translateX}
              />
              <RowComponent
                flexDir={"row"}
                translateX={translateX}
                translateY={translateY}
              />
              <RowComponent
                flexDir={"row-reverse"}
                translateX={translateY}
                translateY={translateX}
              />
            </View>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

FlingGesture.navigationOptions = {
  drawerLabel: "FlingGestureHandler"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  circle: {
    backgroundColor: "#42a5f5",
    borderRadius: 20,
    height: 40,
    width: 40
  }
});
