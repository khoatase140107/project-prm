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
} from "react-native";
import { StyleSheet } from "react-native";
import Error from "../error/Error";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [regisrer, setRegister] = useState(false);
  const navigation = useNavigation();

  // Validate form
  const validateForm = () => {
    if (
      fullname.trim() == "" ||
      email.trim() == "" ||
      passWord.trim() == "" ||
      confirm.trim() == ""
    ) {
      setError("Vui lòng điền đầy đủ thông tin");
    } else if (passWord != confirm) {
      setError("Mật khẩu không trùng khớp");
    } else {
      signUpAccount();
    }
  };

  // Call Api Account for sign up
  const urlAccount = "http://20.188.111.70:5001/api/Account";
  const signUpAccount = async () => {
    try {
      const response = await axios.post(urlAccount, {
        fullname,
        email,
        passWord,
      });
      if (response.status === 200) {
        alert("Đăng ký thành công");
        navigation.navigate("Login");
      }
    } catch (error) {
      alert("Đăng ký không thành công");
    }
  };
  return (
    <View style={{ marginHorizontal: 16, marginTop: 130, padding: 10 }}>
      <Text style={style.text}>Xin chào</Text>
      <Text style={{ color: "#A5A5A5", marginTop: 8, textAlign: "center" }}>
        Vui lòng cung cấp các chi tiết sau cho tài khoản mới
      </Text>
      <TextInput
        placeholder={"Họ và tên"}
        style={style.input}
        placeholderTextColor={"#919191"}
        onChangeText={(fullname) => setFullname(fullname)}
      />
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
      <TextInput
        placeholder={"Xác nhận mật khẩu"}
        style={style.input}
        placeholderTextColor={"#919191"}
        keyboardType={"default"}
        keyboardAppearance={"default"}
        secureTextEntry
        onChangeText={(confirm) => setConfirm(confirm)}
      />
      <Error error={error} />
      <TouchableOpacity style={style.btn} onPress={() => validateForm()}>
        <View style={style.wrapBtn}>
          <Text style={style.textBtn}>Đăng ký</Text>
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

  input: {
    height: 44,
    borderWidth: 0.2,
    paddingLeft: 8,
    borderRadius: 6,
    marginTop: 30,
    marginBottom: 20,
  },
  btn: {
    height: 50,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: "#1981F8",
  },
  wrapBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  textBtn: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
