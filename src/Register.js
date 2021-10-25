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
    <View style={{ marginHorizontal: 16, marginTop: 130, padding: 10 }}>
      <Text style={style.text}>Xin chào</Text>
      <Text style={{ color: "#A5A5A5", marginTop: 8, textAlign: "center" }}>
        Vui lòng cung cấp các chi tiết sau cho tài khoản mới
      </Text>
      <TextInput
        placeholder={"Họ và tên"}
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
        placeholder={"Tên đăng nhập"}
        style={{
          height: 44,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
          marginBottom: 20,
        }}
        placeholderTextColor={"#919191"}
        keyboardType={"default"}
      />
      <TextInput
        placeholder={"Mật khẩu"}
        style={{
          height: 44,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
          marginBottom: 20,
        }}
        placeholderTextColor={"#919191"}
        keyboardType={"default"}
        keyboardAppearance={"default"}
        secureTextEntry
      />
      <TextInput
        placeholder={"Xác nhận mật khẩu"}
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
        style={{
          height: 50,
          marginTop: 40,
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
            Đăng ký
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 16,
            color: "gray",
            fontWeight: "500",
          }}
        >
          Đã có tài khoản?
          <Text style={{ color: "#4F92F8" }}> Đăng nhập</Text>
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
