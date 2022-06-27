import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import NotificationScreen from "../screens/NotificationScreen";
const Stack = createNativeStackNavigator();

export default function ExploreNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBlurEffect: "prominent",
      }}
    >
      <Stack.Screen
        name="ExploreScreen"
        component={NotificationScreen}
        options={{
          title: "Explore",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Github search",
          },
        }}
      />
    </Stack.Navigator>
  );
}
