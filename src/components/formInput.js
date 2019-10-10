import React, { Component } from "react";
import { View, Animated, TextInput, Text } from "react-native";

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      animatedIsFocused: new Animated.Value(props.value === "" ? 0 : 1)
    };
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this.state.animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 100
    }).start();
  }

  render() {
    const {
      label = "",
      value = "",
      onChangeText = () => {},
      secureTextEntry = false,
      maxLength = 120,
      errorField = ""
    } = this.props;
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: this.state.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0]
      }),
      fontSize: this.state.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12]
      }),
      color: this.state.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#aaa", "#490094"]
      })
    };
    const lineStyle = {
      borderBottomColor: this.state.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#aaa", "#490094"]
      })
    }
    return (
      <View
        style={{
          backgroundColor: "none",
          marginVertical: 4,
          paddingTop: 14,
          width: "80%"
        }}
      >
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          style={{
            height: 24,
            fontSize: 16,
            padding: 0,
            color: "#000",
            borderWidth: 0,
            borderBottomColor: "#000"
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
        <Animated.View
          style={[{
            paddingTop: 2,
            borderBottomWidth:2,
          }, lineStyle]}
        />
        <Text style={{ fontSize: 12, color: "#f00" }}>{errorField}</Text>
      </View>
    );
  }
}
