import React from "react";
import { Text, View } from "react-native";

const Error = (props) => {
  const { error } = props;
  if (error === "") return null;
  return (
    <View style={{ backgroundColor: "transparent", marginTop: 10 }}>
      <Text style={{ fontSize: 18, color: "red" }}>{error}</Text>
    </View>
  );
};

export default Error;
