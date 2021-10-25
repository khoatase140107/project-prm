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
const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 16, marginTop: 130 }}>
      <Text style={style.text}>Sign In</Text>
      <Text style={[style.text, style.mv]}>To Account</Text>
      <Text style={{ color: "#A5A5A5" }}>
        Sign with username or email and password to use your account
      </Text>
      <TextInput
        placeholder={"huytq@gmail.com"}
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
        onPress={() => navigation.navigate("MyTabs")}
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
            Sign In
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
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 158,
            fontSize: 16,
            color: "#D4D4D4",
            fontWeight: "500",
          }}
        >
          Don't have an account?-{" "}
          <Text style={{ color: "#4F92F8" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const style = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#434343",
    fontWeight: "500",
  },
  mv: {
    marginVertical: 10,
  },
});
