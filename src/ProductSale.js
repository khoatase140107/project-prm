import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Category = () => {
  
  const [productSale, setProductSale] = useState([]);
  useEffect(() => getProductSaleFromApi());

  const getProductSaleFromApi = async () => {
    try {
      const response = await axios.get(
        "http://20.188.111.70:5001/api/Product/Discount?discount=1"
      );
      if (response.status === 200) {
        setProductSale(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const renderProductSale = () => {
    return productSale.map((element, index) => {
      return (
        <View key={index} style={styles.item}>
          <View style={styles.item_info}>
            <Image
              style={styles.item_img}
              source={{
                uri: element.img
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
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {productSale.length < 1 ? (
        <Text>Không có sản phẩm nào đang khuyến mãi</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderProductSale()}
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

export default Category;
