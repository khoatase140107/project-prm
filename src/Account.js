import React from "react";
import { View, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const Account = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 50,
      }}
    >
      <Image
        source={require("../assets/comming-soon.jpg")}
        style={{ height: 400, width: Dimensions.get("window").width }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Account;
