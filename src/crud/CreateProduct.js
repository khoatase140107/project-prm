import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Fontisto,
} from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/core";
import Error from "../error/Error";

const CreateProduct = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [discount, setDiscount] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState();
  const [imgPick, setImgPick] = useState(null);

  //Get img from my phone
  const pickImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImgPick(result.uri);
    }
  };

  // Upload img to imgbb
  const uploadImage = async (imgPick) => {
    let filename = imgPick.split("/").pop();
    let body = new FormData();
    body.append("image", {
      uri: imgPick,
      name: filename,
      type: "image/jpeg",
    });
    try {
      const response = await axios({
        method: "POST",
        url: "https://api.imgbb.com/1/upload?key=8ce611088e16144c16f12e63289df341",
        data: body,
      });
      if (response.status == 200) {
        return response.data.data.display_url;
      }
    } catch (err) {
      alert(err);
    }
  };

  // Call Api for Create Product
  const urlProduct = "http://20.188.111.70:5001/api/Product";
  const createProduct = async () => {
    try {
      const response = await axios.post(urlProduct, {
        name,
        cost,
        discount,
        brand,
        type,
        weight,
        moreInfo,
        img: await uploadImage(imgPick),
        quantity,
      });
      if (response.status === 200) {
        alert("Tạo sản phẩm thành công");
        navigation.navigate("ListProduct");
      }
    } catch (error) {
      alert("Tạo sản phẩm không thành công");
    }
  };

  // Validate form
  const validateForm = async () => {
    if (
      name.trim() == "" ||
      cost.trim() == "" ||
      discount.trim() == "" ||
      brand.trim() == "" ||
      type.trim() == "" ||
      weight.trim() == "" ||
      moreInfo.trim() == "" ||
      quantity.trim() == ""
    ) {
      setError("Vui lòng nhập đầy đủ thông tin");
    } else {
      await createProduct();
    }
  };

  useEffect(() => {
    async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      // request permission
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    };
  }, []);

  return (
    <View style={style.container}>
      <ScrollView style={{ marginBottom: 50 }}>
        <Error error={error} />
        <View style={style.flexItem}>
          <AntDesign name="laptop" style={style.icon} />
          <TextInput
            placeholder="Tên sản phẩm"
            style={style.textInput}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View>
          <MaterialIcons name="attach-money" style={style.icon} />
          <TextInput
            placeholder="Giá tiền"
            style={style.textInput}
            keyboardType="numeric"
            onChangeText={(cost) => setCost(cost)}
          />
        </View>
        <View>
          <FontAwesome5 name="circle-notch" style={style.icon} />
          <TextInput
            placeholder="Số lượng"
            style={style.textInput}
            keyboardType="numeric"
            onChangeText={(quantity) => setQuantity(quantity)}
          />
        </View>
        <View>
          <AntDesign name="inbox" style={style.icon} />
          <TextInput
            placeholder="Thương hiệu"
            style={style.textInput}
            onChangeText={(brand) => setBrand(brand)}
          />
        </View>
        <View>
          <FontAwesome5 name="weight" style={style.icon} />
          <TextInput
            placeholder="Khối lượng"
            style={style.textInput}
            keyboardType="numeric"
            onChangeText={(weight) => setWeight(weight)}
          />
        </View>
        <View>
          <Fontisto name="shopping-sale" style={style.icon} />
          <TextInput
            placeholder="Giảm giá"
            style={style.textInput}
            keyboardType="numeric"
            onChangeText={(discount) => setDiscount(discount)}
          />
        </View>
        <View>
          <MaterialIcons name="description" style={style.icon} />
          <TextInput
            multiline={true}
            placeholder="Mổ tả"
            style={style.textInput}
            onChangeText={(moreInfo) => setMoreInfo(moreInfo)}
          />
        </View>
        <View style={style.textInput}>
          <MaterialIcons name="category" style={style.icon} />
          <RNPickerSelect
            style={{ fontSize: 16 }}
            placeholder={{
              label: "Loại sản phẩm",
              value: null,
            }}
            onValueChange={(value) => setType(value)}
            placeholderTextColor="gray"
            items={[
              { label: "Laptop", value: "Laptop" },
              { label: "Tablet", value: "Tablet" },
              { label: "Phone", value: "Phone" },
              { label: "TV", value: "TV" },
            ]}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              pickImg();
            }}
          >
            <Entypo style={style.icon} name="image" />
            <Text style={style.textInput}>Chọn hình ảnh</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: imgPick }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={style.btn} onPress={() => validateForm()}>
        <Text style={style.btnText}>Tạo sản phẩm</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  flexItem: {
    display: "flex",
  },
  textInput: {
    borderBottomColor: "gray",
    marginBottom: 20,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16,
    paddingLeft: 24,
  },
  icon: {
    position: "absolute",
    top: 11,
    fontSize: 16,
  },

  btn: {
    position: "absolute",
    bottom: 10,
    borderRadius: 10,
    backgroundColor: "#1981F8",
    padding: 10,
    width: "100%",
    left: 20,
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default CreateProduct;
