import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 16, marginTop: 130 }}>
      <Text style={style.text}>Welcome</Text>
      <Text style={{ color: "#A5A5A5", marginTop: 8 }}>
        Please provide following details for your new account
      </Text>
      <TextInput
        placeholder={"Full Name"}
        style={{
          height: 44,
          width: 350,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
          marginTop: 40,
          marginBottom: 20,
        }}
        placeholderTextColor={"#919191"}
        keyboardType={"email-address"}
      />
      <TextInput
        placeholder={"huytq@gmail.com"}
        style={{
          height: 44,
          width: 350,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
          marginBottom: 20,
        }}
        placeholderTextColor={"#919191"}
        keyboardType={"default"}
      />
      <TextInput
        placeholder={"*******"}
        style={{
          height: 44,
          width: 350,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
        }}
        placeholderTextColor={"#919191"}
        keyboardType={"default"}
        keyboardAppearance={"default"}
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          height: 50,
          width: 356,
          marginTop: 140,
          borderRadius: 10,
          backgroundColor: "#1981F8",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 14,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          width: 356,
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: "#373737",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 14,
          }}
        >
          <Image
            source={require("../assets/google.png")}
            style={{
              height: 20,
              width: 22,
              paddingLeft: 12,
              position: "relative",
              left: -10,
            }}
          />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Sign In with google
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 140,
            fontSize: 16,
            color: "#D4D4D4",
            fontWeight: "500",
          }}
        >
          Already have and account?{" "}
          <Text style={{ color: "#4F92F8" }}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
const style = StyleSheet.create({
  text: {
    fontSize: 22,
    color: "#434343",
    fontWeight: "600",
    textAlign: "center",
  },
  mv: {
    marginVertical: 10,
  },
});
