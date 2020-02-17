import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import SwipeableRow from "./SwipeableRow";

const DATA = [
  { name: "Ashwani" },
  { name: "Gautam" },
  { name: "Ishant" },
  { name: "Ravi" }
];

export default SwipeableList = () => {
  const Row = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => alert(item.name)}>
      <Text style={styles.fromText}>{item.name}</Text>
    </RectButton>
  );

  return (
    <FlatList
      data={DATA}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index }) => (
        <SwipeableRow>
          <Row item={item} />
        </SwipeableRow>
      )}
      keyExtractor={(item, index) => `message ${index}`}
    />
  );
};

SwipeableList.navigationOptions = {
  drawerLabel: "Swipeable"
};

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  messageText: {
    color: "#999",
    backgroundColor: "transparent"
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#999",
    fontWeight: "bold"
  }
});
