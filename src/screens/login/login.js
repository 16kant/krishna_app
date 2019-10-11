import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Base from "./loginBase";
import styles from "../../styles";
import InputField from "../../components/formInput";
import FormBackground from "../../components/formBackground";
import FormSubmitButton from "../../components/formSubmitButton";

export default class Login extends Base {
  render() {
    const height = Dimensions.get("window").height;
    const { error } = this.state;
    return (
      // <KeyboardAvoidingView behavior={"padding"}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            height: height
          }}
        >
          <FormBackground />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                height: 100,
                justifyContent: "flex-end"
              }}
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
              style={{
                height: 260,
                marginVertical: 70,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                backgroundColor: "#fff",
                elevation: 8
              }}
            >
              <InputField
                label="Email"
                value={this.state.user.email}
                onChangeText={text => this.handleChange(text, "email", "emailError")}
                errorField={error.emailError}
              />
              <InputField
                label="Password"
                value={this.state.user.password}
                onChangeText={text => this.handleChange(text, "password", "passwordError")}
                errorField={error.passwordError}
                secureTextEntry={true}
              />
              <FormSubmitButton
                title="Log In"
                onPress={this.validateAllFields}
              />
              <Text style={{ color: "#490094", fontSize: 12 }}>
                Forgot Password?
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: 46,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: 0.5,
                borderColor: "#490094",
                backgroundColor: "#7e00fc"
              }}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text style={{ color: "#fff" }}>
                Don't have an account?{" "}
                <Text style={{ fontWeight: "bold" }}>Sign Up.</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      // </KeyboardAvoidingView>
    );
  }
}
