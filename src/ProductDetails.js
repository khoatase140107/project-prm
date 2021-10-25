import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { icons } from "../src/constants";
import Carousel from "react-native-snap-carousel";
import { StyleSheet } from "react-native";
const Detail = ({ label, price }: { label: string, price: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "#8E8E8E",
          fontSize: 16,
          marginVertical: 10,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <Text style={{ color: "#A5A5A5", fontSize: 14, fontWeight: "400" }}>
        {price}
      </Text>
    </View>
  );
};
const DATA = [
  {
    img: require("../assets/i1.jpg"),
  },
  {
    img: require("../assets/i2.jpg"),
  },
  {
    img: require("../assets/i3.jpg"),
  },
  {
    img: require("../assets/i1.jpg"),
  },
];
const ProductDetails = () => {
  const [active, setActive] = useState(0);

  return (
    <View>
      <ScrollView style={{ padding: 20, marginBottom: 60 }}>
        <View
          style={{
            backgroundColor: "#fbf5f5",
            shadowOpacity: 0.1,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Carousel
              layout={"default"}
              data={DATA}
              sliderWidth={300}
              itemWidth={350}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      borderRadius: 5,
                      height: 250,
                      marginTop: 10,
                      marginRight: 10,
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{ height: 200, width: 350, borderRadius: 8 }}
                    />
                  </View>
                );
              }}
              onSnapToItem={(index) => setActive(index)}
            />
          </View>
          {/* info phone */}
          <View style={{ marginLeft: 14 }}>
            <Text style={{ color: "#616161", fontSize: 18 }}>
              Iphone 13 Gold Medal
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 25,
                  width: 60,
                  backgroundColor: "#1C81F8",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16, marginLeft: 4 }}>
                  5.0
                </Text>
                <Image
                  source={require("../assets/heart.png")}
                  style={{ height: 20, width: 20, marginLeft: 4 }}
                />
              </TouchableOpacity>
              <Text style={{ color: "#949494", fontSize: 15, marginLeft: 24 }}>
                96 ratings
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 14,
                marginBottom: 20,
                width: 150,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>$6</Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  textDecorationLine: "line-through",
                }}
              >
                5%
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#7DA4F9" }}
              >
                5% off
              </Text>
            </View>
          </View>
          {/* end info */}
        </View>
        <View
          style={{
            height: 220,
            backgroundColor: "#fbf5f5",
            padding: 10,
            marginTop: 20,
            shadowOpacity: 0.1,
            borderRadius: 10,
            marginBottom: 50,
          }}
        >
          <Text
            style={{
              color: "#757575",
              fontSize: 20,
              marginLeft: 14,
              fontWeight: "600",
              marginVertical: 14,
            }}
          >
            Chi tiết sản phẩm
          </Text>
          <View style={{ height: 1, width: 350, backgroundColor: "#dfdede" }} />
          <Detail label={"Brand "} price={"ABC brand"} />
          <Detail label={"Type"} price={"Mobile"} />
          <Detail label={"Weight"} price={"382 gram"} />
          <Detail label={"Operating System"} price={"IOS 14.5"} />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 20,
          left: 20,
        }}
      >
        <Image source={icons.heart} style={{ height: 40, width: 40 }} />
        <TouchableOpacity
          style={{
            height: 40,
            width: 320,
            borderRadius: 4,
            backgroundColor: "#1981F8",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              marginTop: 6,
              fontWeight: "600",
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductDetails;
