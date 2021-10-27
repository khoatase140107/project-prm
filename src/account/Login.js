import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import Error from "../error/Error";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState();

  // Validate Form
  const validateForm = () => {
    if (email.trim() == "" || passWord.trim() == "") {
      setError("Vui lòng nhập đủ thông tin");
    } else {
      checklogin();
    }
  };

  // Call api Login
  const checklogin = async () => {
    try {
      const reponse = await axios.get(
        "http://20.188.111.70:5001/api/Account/login?email=" +
          email +
          "&passWord=" +
          passWord
      );
      if (reponse.status === 200) {
        console.log(reponse.data);
        if (reponse.data == true) {
          Alert.alert("Đăng nhập thành công");
          navigation.navigate("ListProduct");
          setError("");
        } else {
          Alert.alert("Đăng nhập thất bại");
        }
      }
    } catch (error) {
      Alert.alert(error);
    }
  };
  return (
    <View style={{ marginHorizontal: 16, marginTop: 130, padding: 10 }}>
      <Text style={style.text}>Đăng nhập</Text>
      <Text style={[style.text, style.mv]}>Với Tài Khoản</Text>
      <Text style={{ color: "#A5A5A5" }}>
        Đăng nhập với tài khoản và mật khẩu của bạn để trải nghiệm mua sắm
      </Text>
      <TextInput
        placeholder={"Tên đăng nhập"}
        style={style.input}
        placeholderTextColor={"#919191"}
        keyboardType={"email-address"}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder={"Mật khẩu"}
        style={style.input}
        placeholderTextColor={"#919191"}
        keyboardType={"default"}
        keyboardAppearance={"default"}
        secureTextEntry
        onChangeText={(passWord) => setPassword(passWord)}
      />
      <Error error={error} />
      <TouchableOpacity onPress={() => validateForm()} style={style.btnLogin}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 14,
          }}
        >
          <Text style={style.textLogin}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={style.textRegis}>
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
  input: {
    height: 44,
    borderWidth: 0.2,
    paddingLeft: 8,
    borderRadius: 6,
    marginTop: 40,
    marginBottom: 20,
  },
  btnLogin: {
    height: 50,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: "#1981F8",
  },
  textLogin: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  textRegis: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
    fontWeight: "500",
  },
});
