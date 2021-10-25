import React from "react";
import { Image, SafeAreaView, View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "./src/Checkout";
import Home from "./src/Home";
import MyCart from "./src/MyCart";
import Login from "./src/Login";
import { icons } from "./src/constants";
import Register from "./src/Register";
import ProductDetails from "./src/ProductDetails";
import Category from "./src/Category";
import Account from "./src/Account";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: any }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? icons.home_a : icons.home;
          } else if (route.name === "Category") {
            iconName = focused ? icons.cate_a : icons.cate;
          } else if (route.name === "MyCart") {
            iconName = focused ? icons.cart_a : icons.cart;
          } else if (route.name === "Account") {
            iconName = focused ? icons.account : icons.user;
          }
          return (
            <Image
              source={iconName}
              style={{ height: 20, width: 20 }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: "#eb760a",
        tabBarInactiveTintColor: "#000",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="MyCart" component={MyCart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CheckOut" component={Checkout} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Product Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
