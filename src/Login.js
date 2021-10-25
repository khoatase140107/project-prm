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
    <View style={{ marginHorizontal: 16, marginTop: 130, padding: 10 }}>
      <Text style={style.text}>Đăng nhập</Text>
      <Text style={[style.text, style.mv]}>Với Tài Khoản</Text>
      <Text style={{ color: "#A5A5A5" }}>
        Đăng nhập với tài khoản và mật khẩu của bạn để trải nghiệm mua sắm
      </Text>
      <TextInput
        placeholder={"Tên đăng nhập"}
        style={{
          height: 44,
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
        placeholder={"Mật khẩu"}
        style={{
          height: 44,
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
          marginTop: 50,
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
            Đăng nhập
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 16,
            color: "gray",
            fontWeight: "500",
          }}
        >
          Bạn chưa có tài khoản?
          <Text style={{ color: "#4F92F8" }}> Đăng ký</Text>
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
