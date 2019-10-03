import { StyleSheet, Dimensions } from "react-native";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
