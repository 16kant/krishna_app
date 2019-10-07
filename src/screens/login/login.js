import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Base from "./loginBase";
import styles from "../../styles";

export default class Login extends Base {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "stretch",
          justifyContent: "space-between",
          backgroundColor: "#7e00fc"
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 40,
              fontStyle: "italic"
            }}
          >
            Krishna
          </Text>
        </View>
        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
        >
          <TextInput style={style.input} placeholder="Username" />
          <TextInput style={style.input} placeholder="Password" />
          <TouchableOpacity style={style.button}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Log In</Text>
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 12 }}>Forgot Password?</Text>
        </View>
        <View
          style={{
            height: 46,
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 2,
            borderColor: "#490094"
          }}
        >
          <Text style={{ color: "#fff" }}>
            Don't have an account?{" "}
            <Text style={{ fontWeight: "bold" }}>Sign Up.</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    margin: 8,
    height: 40,
    borderRadius: 20,
    width: "70%",
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "#490094"
  },
  button: {
    backgroundColor: "#490094",
    margin: 8,
    height: 40,
    justifyContent: "center",
    width: "70%",
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff"
  }
});
