import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FormSubmitButton = props => {
  const { title = "", onPress = () => {} } = props;
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7e00fc",
    marginVertical: 18,
    height: 40,
    width: "80%",
    borderRadius: 20,
    elevation: 4
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default FormSubmitButton;
