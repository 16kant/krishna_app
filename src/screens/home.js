import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class Home extends Component {
  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthStack");
  };

  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Krishna</Text>
        <Button title="Log Out" onPress={this.signOut} />
      </View>
    );
  }
}
