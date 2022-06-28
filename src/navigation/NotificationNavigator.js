import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import NotificationScreen from "../screens/NotificationScreen";
const Stack = createNativeStackNavigator();

export default function NotificationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBlurEffect: "prominent",
      }}
    >
      <Stack.Screen
        name="NavigationScreen"
        component={NotificationScreen}
        options={{
          title: "Inbox",
          headerLargeTitle: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("This is a button!")}>
              <Text style={{ color: "blue", fontSize: 20 }}>Select</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}