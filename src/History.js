import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getOrderIdByUserId();
  }, []);

  const getOrderIdByUserId = async () => {
    try {
      const response = await axios.get(
        "http://20.188.111.70:5001/api/Order/User/17"
      );
      if (response.status === 200) {
        await getOrderDetailByOrderId(response.data[0].id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getOrderDetailByOrderId = async (idOrder) => {
    try {
      const response = await axios.get(
        `http://20.188.111.70:5001/api/OrderDetail/Order/${idOrder}`
      );
      if (response.status === 200) {
        let listHistory = [];
        for (let i = 0; i < response.data.length; i++) {
          const productByID = await findProductById(response.data[i].productId);
          listHistory.push({
            orderId: response.data[i].orderId,
            product: productByID,
            quantity: response.data[i].quantity,
          });
        }
        setHistory(listHistory);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const findProductById = async (idPro) => {
    try {
      const response = await axios.get(
        `http://20.188.111.70:5001/api/Product/${idPro}`
      );
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderOrderDetail = () => {
    return history.map((element, index) => {
      console.log(element);
      return (
        <View key={index} style={styles.item}>
          <View style={styles.item_info}>
            <Image
              style={styles.item_img}
              source={{
                uri: element.product.img,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <Text style={styles.item_name}>{element.product.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 4,
                  alignItems: "center",
                }}
              >
                <Text style={styles.item_price}>
                  Giá tiền:
                  <Text
                    style={{
                      color: "#585858",
                      fontSize: 18,
                      textDecorationLine: "line-through",
                    }}
                  >
                    ${element.product.cost}
                  </Text>
                </Text>
                <Text style={styles.item_sale}>
                  Khuyến mãi: {element.product.discount}%
                </Text>
              </View>
              <Text style={styles.item_sale}>Số lượng: {element.quantity}</Text>
              <Text style={styles.item_sale}>
                Sau khuyến mãi:
                <Text
                  style={{
                    color: "#2F88F8",
                    fontSize: 18,
                    position: "relative",
                    right: 0,
                  }}
                >
                  $
                  {element.product.cost -
                    (element.product.cost * element.product.discount) / 100}
                </Text>
              </Text>
              <Text style={styles.item_sale}>
                Tổng tiền
                <Text
                  style={{
                    color: "#2F88F8",
                    fontSize: 18,
                    position: "relative",
                    right: 0,
                  }}
                >
                  $
                  {(element.product.cost -
                    (element.product.cost * element.product.discount) / 100) *
                    element.quantity}
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
                  Đã thanh toán
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
      {renderOrderDetail()}
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

export default History;
