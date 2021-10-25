// import React from "react";
// import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
// import { StyleSheet } from "react-native";
// const PRODUCt = [
//   {
//     img: require("../../../assets/s1.jpg"),
//     name: "High heels Sandal",
//     price: "5.90",
//     discount: "5.90",
//     percentage: "0% off",
//   },
//   {
//     img: require("../../../assets/s2.jpg"),
//     name: "High heels Sandal",
//     price: "11.79",
//     discount: "12.00",
//     percentage: "2% off",
//   },
//   {
//     img: require("../../../assets/s3.jpg"),
//     name: "High heels Sandal",
//     price: "39.20",
//     discount: "49.00",
//     percentage: "20% off",
//   },
// ];
// const Detail = ({
//   label,
//   price,
//   isColor,
//   isColorGreen,
// }: {
//   label: string;
//   price: string;
//   isColor?: boolean;
//   isColorGreen?: boolean;
// }) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginHorizontal: 20,
//       }}
//     >
//       <Text
//         style={{
//           color: "#8E8E8E",
//           fontSize: 16,
//           marginVertical: 10,
//           fontWeight: "500",
//         }}
//       >
//         {label}
//       </Text>
//       {isColor && (
//         <Text style={{ color: "#A5A5A5", fontSize: 14, fontWeight: "400" }}>
//           {price}
//         </Text>
//       )}
//       {isColorGreen && (
//         <Text style={{ color: "#8AB0FA", fontSize: 14, fontWeight: "400" }}>
//           {price}
//         </Text>
//       )}
//     </View>
//   );
// };
// const Checkout = () => {
//   return (
//     <View style={styles.container}>
//       {/* <StatusBar style="auto" /> */}
//       <View>
//         <FlatList
//         key={Math.random().toString()}
//           data={PRODUCt}
//           renderItem={({ item, index }) => {
//             return (
//               <View
//                 style={{
//                   height: 90,
//                   width: 350,
//                   backgroundColor: "#fbf5f5",
//                   shadowOpacity: 0.2,
//                   flexDirection: "row",
//                   borderRadius: 10,
//                   alignItems: "center",
//                   marginBottom: 14,
//                 }}
//               >
//                 <View>
//                   <Image
//                     source={item.img}
//                     style={{
//                       height: 65,
//                       width: 65,
//                       marginLeft: 10,
//                       marginRight: 16,
//                     }}
//                   />
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       color: "#777777",
//                       fontSize: 18,
//                       fontWeight: "500",
//                       marginBottom: 10,
//                     }}
//                     key={Math.random().toString()}
//                   >
//                     {item.name}
//                   </Text>
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       justifyContent: "space-around",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Text style={{ color: "#707070", fontSize: 16 }}>
//                       ${item.price}
//                     </Text>
//                     <Text
//                       style={{
//                         color: "#707070",
//                         fontSize: 12,
//                         textDecorationLine: "line-through",
//                       }}
//                     >
//                       ${item.discount}
//                     </Text>
//                     <Text
//                       style={{
//                         color: "#4D91F8",
//                         fontSize: 12,
//                         fontWeight: "500",
//                       }}
//                     >
//                       {item.percentage}
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             );
//           }}
//         />
//       </View>
//       {/* Detail Price and Product */}
//       <View
//         style={{
//           height: 220,
//           width: 350,
//           backgroundColor: "#fbf5f5",
//           marginTop: 20,
//           shadowOpacity: 0.1,
//           borderRadius: 10,
//         }}
//       >
//         {/* Truyen props vo  */}
//         <Detail label={"Price Detail"} price={"$16"} isColor={true} />
//         <View style={{ height: 1, width: 350, backgroundColor: "#dfdede" }} />
//         <Detail label={"Price(3 item)"} price={"$16"} isColor={true} />
//         <Detail label={"Discount"} price={"$-1"} isColorGreen={true} />
//         <Detail label={"Delivery Charges"} price={"$5"} isColor={true} />
//         <View style={{ height: 1, width: 350, backgroundColor: "#dfdede" }} />
//         <Detail label={"Total Amount"} price={"$20"} isColor={true} />
//       </View>
//       <TouchableOpacity
//         style={{
//           height: 60,
//           width: 356,
//           marginTop: 100,
//           borderRadius: 10,
//           backgroundColor: "#1981F8",
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
//             Proceed To Buy
//           </Text>
//           <Image
//             source={require("../../../assets/ic_next.png")}
//             style={{ height: 20, width: 20, marginLeft: 10 }}
//           />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     marginTop: 10,
//     marginHorizontal: 16,
//   },
// });

// export default Checkout;
