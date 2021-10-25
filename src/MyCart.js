import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";

const PRODUCt = [
  {
    img: require("../../../assets/s1.jpg"),
    name: "High heels Sandal",
    price: "5.90",
    discount: "5.90",
    percentage: "0% off",
  },
  {
    img: require("../../../assets/s2.jpg"),
    name: "High heels Sandal",
    price: "11.79",
    discount: "12.00",
    percentage: "2% off",
  },
  {
    img: require("../../../assets/s3.jpg"),
    name: "High heels Sandal",
    price: "39.20",
    discount: "49.00",
    percentage: "20% off",
  },
];
const MyCart = () => {
  const [value, setValue] = useState(1);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View>
        <FlatList
          key={Math.random().toString()}
          data={PRODUCt}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 130,
                  width: 350,
                  backgroundColor: "#fbf5f5",
                  shadowOpacity: 0.2,
                  flexDirection: "row",
                  borderRadius: 10,
                  //   alignItems: "center",
                }}
              >
                <View style={{ marginTop: 16 }}>
                  <Image
                    source={item.img}
                    style={{
                      height: 65,
                      width: 65,
                      marginLeft: 10,
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
                      marginBottom: 16,
                    }}
                    key={Math.random().toString()}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#707070", fontSize: 16 }}>
                      ${item.price}
                    </Text>
                    <Text
                      style={{
                        color: "#707070",
                        fontSize: 12,
                        textDecorationLine: "line-through",
                      }}
                    >
                      ${item.discount}
                    </Text>
                    <Text
                      style={{
                        color: "#4D91F8",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      {item.percentage}
                    </Text>
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <NumericInput
                      value={value}
                      onChange={(value) => setValue(value)}
                      onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                      totalWidth={66}
                      totalHeight={22}
                      iconSize={25}
                      step={1}
                      // valueType='real'
                      rounded
                      textColor="#000"
                      iconStyle={{ color: "white" }}
                      rightButtonBackgroundColor="#3187F8"
                      leftButtonBackgroundColor="#3187F8"
                    />
                  </View>
                </View>
                {/* <View> */}
                <TouchableOpacity
                  onPress={() => console.log("Delete")}
                  style={{ position: "absolute", right: 18, top: 40 }}
                >
                  <Image
                    source={require("../../../assets/delete.png")}
                    style={{ height: 24, width: 24 }}
                  />
                </TouchableOpacity>
                {/* </View> */}
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CheckOut")}
        style={{
          height: 60,
          width: 356,
          marginTop: 200,
          borderRadius: 10,
          backgroundColor: "#1981F8",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Proceed To CheckOut
          </Text>
          <Image
            source={require("../../../assets/ic_next.png")}
            style={{ height: 20, width: 20, marginLeft: 10 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginHorizontal: 16,
  },
});

export default MyCart;
