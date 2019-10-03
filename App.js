import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import styles from "./src/styles";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#5dc3d5"} hidden={true} />
      </View>
    );
  }
}
