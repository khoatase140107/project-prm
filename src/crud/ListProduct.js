import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
  RefreshControl,
} from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5, Feather, AntDesign } from "react-native-vector-icons";
import NumericInput from "react-native-numeric-input";
import axios from "axios";

const ListProduct = () => {
  const navigation = useNavigation();
  const [listProduct, setListProduct] = useState();

  // Call Api Product for load Product
  const urlProduct =
    "http://20.188.111.70:5001/api/Product?sort=desc&pageNumber=0&pageSize=0";
  const loadProduct = async () => {
    try {
      const response = await axios.get(urlProduct);
      if (response.status === 200) {
        setListProduct(response.data);
        setLoading(false);
      }
    } catch (error) {
      Alert(error);
    }
  };

  // Call Api Delete Product
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        "http://20.188.111.70:5001/api/Product/" + id
      );
      if (response.status === 200) {
        loadProduct();
        Alert.alert("Xóa thành công");
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  // Show Confirm Delete
  const confirmDelete = (id) => {
    Alert.alert("Xóa", "Bạn muốn xóa sản phẩm này", [
      {
        text: "Hủy",
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteProduct(id) },
    ]);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateProduct")}
        style={styles.btnAdd}
      >
        <FontAwesome5 name="plus" style={styles.iconAdd} />
      </TouchableOpacity>
      <ScrollView
        refreshControl={<RefreshControl onRefresh={() => loadProduct()} />}
      >
        <FlatList
          keyExtractor={({ id }, index) => id}
          data={listProduct}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.wrapProduct}>
                <View>
                  <Image source={{ uri: item.img }} style={styles.imgProduct} />
                </View>
                <View>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>Giá: {item.cost} $</Text>
                  <Text style={styles.text}>Nhãn hiệu: {item.brand}</Text>
                  <Text style={styles.text}>Giảm giá: {item.discount}</Text>
                  <Text style={styles.text}>Cân nặng: {item.weight} kg</Text>
                  <Text style={styles.text}>Loại: {item.type}</Text>
                  <Text style={styles.text}>Số lượng: {item.quantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("UpdateProduct", { item: item })
                  }
                  style={{ position: "absolute", right: 10, top: 20 }}
                >
                  <Feather name="edit-2" style={{ fontSize: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => confirmDelete(item.id)}
                  style={{ position: "absolute", right: 10, top: 60 }}
                >
                  <AntDesign name="delete" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
  },

  wrapProduct: {
    backgroundColor: "#fbf5f5",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  imgProduct: {
    height: 200,
    width: 120,
    resizeMode: "contain",
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
  btnAdd: {
    backgroundColor: "#1981F8",
    width: 60,
    height: 60,
    borderRadius: 250,
    position: "absolute",
    bottom: 30,
    zIndex: 20,
    right: 20,
  },
  iconAdd: {
    position: "absolute",
    left: 21,
    top: 20,
    fontSize: 20,
    color: "white",
  },
});
export default ListProduct;
