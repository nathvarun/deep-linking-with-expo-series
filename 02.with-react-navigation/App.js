import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const prefix = Linking.makeUrl("/");

const Stack = createStackNavigator();

export default function App() {
  const [data, setData] = useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "home",
        Settings: "settings",
      },
    },
  };

  const url = Linking.useUrl();
  console.log(url);
  // function handleDeepLink(event) {
  //   let data = Linking.parse(event.url);
  //   setData(data);
  // }

  // useEffect(() => {
  //   Linking.addEventListener("url", handleDeepLink);
  //   return () => {
  //     Linking.removeEventListener("url");
  //   };
  // }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>
    //     {data ? JSON.stringify(data) : "App not opened from deep link"}
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
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
