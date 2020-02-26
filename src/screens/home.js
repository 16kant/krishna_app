import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const Home = props => {
  const signOut = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("AuthStack");
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Krishna</Text>
      <Button title="Log Out" onPress={signOut} />
    </View>
  );
};
export default Home;
