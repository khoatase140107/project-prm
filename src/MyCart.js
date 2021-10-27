import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";

const PRODUCt = [
  {
    img: require("../assets/s1.jpg"),
    name: "High heels Sandal",
    price: "5.90",
    discount: "5.90",
    percentage: "0% off",
  },
  {
    img: require("../assets/s2.jpg"),
    name: "High heels Sandal",
    price: "11.79",
    discount: "12.00",
    percentage: "2% off",
  },
  {
    img: require("../assets/s3.jpg"),
    name: "High heels Sandal",
    price: "39.20",
    discount: "49.00",
    percentage: "20% off",
  },
];
const MyCart = () => {
  const [value, setValue] = useState(1);
  const [productInCart, setProductInCart] = useState([]);
  const navigation = useNavigation();

  useEffect(async () => {
    console.log(productInCart);
    const value = await AsyncStorage.getItem("ADDTOCART");
    if (value !== null) {
      setProductInCart(JSON.parse(value));
    }
  }, []);

  const saveProductInOrder = async () => {
    //console.log("haha");
    try {
      const response = await axios.post("http://20.188.111.70:5001/api/Order", {
        userId: 17,
      });
      if (response.status === 200) {
        for (let i = 0; i < productInCart.length; i++) {
          const data = {
            orderId: response.data,
            productId: productInCart[i].product.id,
            quantity: productInCart[i].quantity,
          };
          await saveInOrderDetail(data);
        }

        await AsyncStorage.removeItem("ADDTOCART");
        setProductInCart([]);
        ToastAndroid.show("Đặt hàng thành công", ToastAndroid.SHORT);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveInOrderDetail = async (data) => {
    try {
      const response = await axios.post(
        "http://20.188.111.70:5001/api/OrderDetail",
        data
      );
      if (response.status === 200) {
        //console.log("haha");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <FlatList
        key={Math.random().toString()}
        data={productInCart}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                height: 130,
                backgroundColor: "#fbf5f5",

                flexDirection: "row",
                borderRadius: 10,
                marginBottom: 20,
                //   alignItems: "center",
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  source={{ uri: item.product.img }}
                  style={{
                    height: "100%",
                    width: 90,
                    resizeMode: "cover",
                    marginRight: 10,
                  }}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <Text
                  style={{
                    color: "#777777",
                    fontSize: 18,
                    fontWeight: "500",
                    marginBottom: 18,
                  }}
                  key={Math.random().toString()}
                >
                  {item.product.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#707070", fontSize: 18 }}>
                    {item.product.discount}%
                  </Text>
                  <Text
                    style={{
                      color: "#707070",
                      fontSize: 16,
                      textDecorationLine: "line-through",
                      paddingLeft: 4,
                      paddingRight: 4,
                    }}
                  >
                    ${item.product.cost}
                  </Text>
                  <Text
                    style={{
                      color: "#4D91F8",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    $
                    {(item.product.cost -
                      (item.product.cost * item.product.discount) / 100) *
                      item.quantity}
                  </Text>
                </View>
                <View style={{ marginTop: 8 }}>
                  <NumericInput
                    value={item.quantity}
                    onChange={(value) => {
                      console.log(value);
                      if (value <= 1) {
                        ToastAndroid.show(
                          "Số lượng phải ít nhất là 1",
                          ToastAndroid.SHORT
                        );
                      } else {
                        let product = [...productInCart];
                        product[index].quantity = value;
                        setProductInCart(product);
                      }
                    }}
                  />
                </View>
              </View>
              {/* <View> */}
              <TouchableOpacity
                onPress={() => console.log("Delete")}
                style={{ position: "absolute", right: 18, top: 40 }}
              >
                <Image
                  source={require("../assets/delete.png")}
                  style={{ height: 26, width: 26 }}
                />
              </TouchableOpacity>
              {/* </View> */}
            </View>
          );
        }}
      />

      <TouchableOpacity
        onPress={() => saveProductInOrder()}
        style={{
          height: 60,
          width: 356,
          marginTop: 200,
          borderRadius: 10,
          backgroundColor: "#1981F8",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Thanh toán
          </Text>
          <Image
            source={require("../assets/ic_next.png")}
            style={{ height: 20, width: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default MyCart;
