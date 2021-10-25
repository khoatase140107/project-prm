import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { icons } from "../src/constants";
import { StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
const IMG = [
  {
    img: require("../assets/sale.jpg"),
  },
  {
    img: require("../assets/shoes1.jpg"),
  },
  {
    img: require("../assets/i3.jpg"),
  },
  {
    img: require("../assets/shoes.jpg"),
  },
];
const CATEGORY = [
  {
    icons: require("../assets/fashion.jpg"),
    name: "Fashion",
  },
  {
    icons: require("../assets/accessory.jpg"),
    name: "Accessory",
  },
  {
    icons: require("../assets/mobiphone.jpg"),
    name: "Mobiles",
  },
  {
    icons: require("../assets/gocery.jpg"),
    name: "Grocery",
  },
];
const PRODUCT = [
  {
    img: require("../assets/shoes.jpg"),
    name: "Nike Sport Shoe For",
    discount: "26.39",
    price: "29.00",
    percentage: "9% off",
  },
  {
    img: require("../assets/i3.jpg"),
    name: "Iphone 13 Gold Medal",
    discount: "11.76",
    price: "12.00",
    percentage: "2% off",
  },
  {
    img: require("../assets/gocery.jpg"),
    name: "Vegetable and Fruit",
    price: "26.39",
    discount: "29.00",
    percentage: "9% off",
  },
  {
    img: require("../assets/shoes1.jpg"),
    name: "High heel Sandal",
    price: "26.39",
    discount: "29.00",
    percentage: "9% off",
  },
];
const Home = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  return (
    <ScrollView>
      <View style={{ marginTop: 30 }}>
        {/* =====Header===== */}
        <View
          style={{
            padding: 20,
            backgroundColor: "#1981F8",
            height: 80,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 40,
              width: 280,
              backgroundColor: "white",
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={icons.search} style={style.icon} />
            <TextInput
              placeholderTextColor={"gray"}
              placeholder={"Search"}
              style={{ fontWeight: "600", fontSize: 14, paddingLeft: 10 }}
            />
          </View>
          <Image
            source={icons.notification}
            style={{ height: 20, width: 20, marginLeft: 30 }}
          />
          <Image source={icons.cart} style={style.icon} />
        </View>
        {/* ====Carousel====== */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            data={IMG}
            sliderWidth={300}
            itemWidth={300}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    borderRadius: 5,
                    height: 250,
                    marginLeft: 16,
                    marginRight: 25,
                    paddingTop: 20,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ height: 160, width: 300, borderRadius: 8 }}
                  />
                </View>
              );
            }}
            onSnapToItem={(index) => setActive(index)}
          />
        </View>
        {/* ====Category====== */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 14,
              position: "relative",
              bottom: 50,
            }}
          >
            <Text style={style.msg}>Category</Text>
            <Text style={style.view}>Xem tất cả</Text>
          </View>
        </View>
        {/* ==begin */}
        <View
          style={{ flexDirection: "row", position: "relative", bottom: 40 }}
        >
          <Carousel
            layout={"default"}
            data={CATEGORY}
            sliderWidth={300}
            itemWidth={120}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    borderRadius: 5,
                    height: 140,
                    width: 120,
                    paddingTop: 20,
                    marginLeft: 16,
                    marginRight: 25,
                    backgroundColor: "#E8F0F9",
                    shadowOpacity: 0.1,
                  }}
                >
                  <Image
                    source={item.icons}
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 8,
                      marginLeft: 20,
                    }}
                  />
                  <Text
                    style={{
                      color: "#63676A",
                      fontSize: 16,
                      width: 80,
                      textAlign: "center",
                      marginTop: 8,
                      marginLeft: 16,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              );
            }}
            onSnapToItem={(index) => setActive(index)}
          />
        </View>
        {/* =====end= */}
        {/* =====Best Seller */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 14,
              position: "relative",
              bottom: 20,
              alignItems: "center",
            }}
          >
            <Text style={style.msg}>Sản phẩm mới nhất</Text>
            <Text style={style.view}>Xem tất cả</Text>
          </View>
          {/* =====product==== */}
          <View style={{ marginHorizontal: 14, marginBottom: 15 }}>
            <FlatList
              data={PRODUCT}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      height: 210,
                      width: 180,
                      backgroundColor: "white",
                      shadowOpacity: 0.2,
                      marginRight: 14,
                      borderRadius: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Product Details")}
                    >
                      <Image
                        source={item.img}
                        style={{
                          height: 100,
                          width: 180,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ padding: 10 }}>
                      <Text
                        style={{
                          color: "#585858",
                          fontSize: 16,
                        }}
                      >
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 6,
                        }}
                      >
                        <Image source={icons.start} style={style.start} />
                        <Image source={icons.start} style={style.start} />
                        <Image source={icons.start} style={style.start} />
                        <Image source={icons.start} style={style.start} />
                        <Image source={icons.start} style={style.start} />
                      </View>
                      <Text
                        style={{
                          color: "#585858",
                          fontSize: 16,
                          marginTop: 6,
                        }}
                      >
                        ${item.discount}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 6,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#585858",
                            fontSize: 14,
                            textDecorationLine: "line-through",
                          }}
                        >
                          ${item.price}
                        </Text>
                        <Text
                          style={{
                            color: "#2F88F8",
                            fontSize: 14,
                            position: "relative",
                            right: 0,
                          }}
                        >
                          ${item.percentage}
                        </Text>
                        <TouchableOpacity
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#2F88F8",
                            borderRadius: 6,
                            marginTop: -20,
                          }}
                        >
                          <Image
                            source={icons.cart}
                            style={{
                              height: 20,
                              width: 20,
                              marginTop: 8,
                              marginLeft: 8,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  msg: {
    color: "#6C6C6C",
    fontSize: 18,
    fontWeight: "600",
  },
  view: {
    color: "#0076F7",
    fontSize: 16,
    fontWeight: "500",
  },
  start: {
    height: 12,
    width: 12,
  },
});
