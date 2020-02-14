import React, { Component } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

export default class PanTest extends Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  UNSAFE_componentWillMount() {
    this._animatedValueX = 0;
    this._animatedValueY = 0;
    this.state.pan.x.addListener(value => (this._animatedValueX = value.value));
    this.state.pan.y.addListener(value => (this._animatedValueY = value.value));

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this._animatedValueX,
          y: this._animatedValueY
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: () => {
        // Animated.spring(this.state.pan, {
        //   toValue: 0
        // }).start();
        // this.state.pan.flattenOffset();
      }
    });
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners();
    this.state.pan.y.removeAllListeners();
  }

  getStyle = () => {
    return [
      styles.square,
      {
        transform: [
          {
            translateX: this.state.pan.x
          },
          {
            translateY: this.state.pan.y
          },
          {
            rotate: this.state.pan.y.interpolate({
              inputRange: [-200, 0, 200],
              outputRange: ["-30deg", "0deg", "30deg"]
            })
          }
        ]
      },
      {
        opacity: this.state.pan.y.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: [0.5, 1, 0.5]
        })
      }
    ];
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={this.getStyle()}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});
