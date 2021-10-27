import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ProductsByCate = ({ route }) => {
  const cateName = route.params != undefined ? route.params.categoryName : null;
  const navigation = useNavigation();
  const [productByCate, setProductByCate] = useState([]);

  useEffect(() => getProductByCateNameFromApi());
  const getProductByCateNameFromApi = async () => {
    try {
      const response = await axios.get(
        `http://20.188.111.70:5001/api/Product/Type?type=${cateName}`
      );
      if (response.status === 200) {
        setProductByCate(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const getItemToCart = async (element) => {
    try {
      //await AsyncStorage.removeItem("ADDTOCART");
      const cart = await AsyncStorage.getItem("ADDTOCART");
      if (cart != null) {
        console.log("not null");
        const oldCart = [...JSON.parse(cart)];
        let flag = false;
        for (let i = 0; i < oldCart.length; i++) {
          if (oldCart[i].product.id == element.id) {
            flag = true;
            oldCart[i].quantity++;
            break;
          }
        }
        if (flag) {
          await AsyncStorage.setItem("ADDTOCART", JSON.stringify(oldCart));
        } else {
          await AsyncStorage.setItem(
            "ADDTOCART",
            JSON.stringify([...oldCart, { product: element, quantity: 1 }])
          );
        }
      } else {
        const addProduct = { product: element, quantity: 1 };
        await AsyncStorage.setItem("ADDTOCART", JSON.stringify([addProduct]));
        console.log([addProduct]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const renderProductByCateName = () => {
    return productByCate.map((element, index) => {
      return (
        <View key={index} style={styles.item}>
          <View style={styles.item_info}>
            <Image
              style={styles.item_img}
              source={{
                uri: element.img,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <Text style={styles.item_name}>{element.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 4,
                }}
              >
                <Text
                  style={{
                    paddingLeft: 12,
                  }}
                >
                  Type: {element.type}
                </Text>
                <Text
                  style={{
                    paddingRight: 12,
                  }}
                >
                  Brand: {element.brand}
                </Text>
              </View>

              <Text style={styles.item_sale}>
                Khuyến mãi: {element.discount}%
              </Text>
              <Text style={styles.item_price}>
                Giá tiền:{" "}
                <Text
                  style={{
                    color: "#585858",
                    fontSize: 18,
                    textDecorationLine: "line-through",
                  }}
                >
                  ${element.cost}
                </Text>
              </Text>
              <Text style={styles.item_sale}>
                Sau khuyến mãi:{" "}
                <Text
                  style={{
                    color: "#2F88F8",
                    fontSize: 18,
                    position: "relative",
                    right: 0,
                  }}
                >
                  ${element.cost - (element.cost * element.discount) / 100}
                </Text>
              </Text>

              <TouchableOpacity
                onPress={() => {
                  getItemToCart(element);
                }}
                style={{
                  backgroundColor: "#2F88F8",
                  marginLeft: 10,
                  marginRight: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Thêm vào giỏ hàng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
  };
  return (
    <View>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 24,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        {" "}
        Category: {cateName}
      </Text>
      {productByCate.length < 1 ? (
        <Text>Không có sản phẩm ở loại {cateName}</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderProductByCateName()}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 20,
  },
  item_info: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 16,
    paddingLeft: 16,
  },
  item_img: {
    width: 150,
    height: 150,
    marginRight: 2,
  },
  item_name: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 4,
  },
  item_sale: {
    paddingBottom: 4,
    paddingLeft: 12,
  },
  item_price: {
    paddingBottom: 4,
    paddingLeft: 12,
  },
});
export default ProductsByCate;
