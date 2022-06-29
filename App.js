import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { Appearance } from "react-native";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

import { EventRegister } from "react-native-event-listeners";

import themeContext from "./src/config/themeContext";
import theme from "./src/config/theme";

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: "#ED5B92",
    primary: "#000000",
    background: "#FFFFFF",
    card: "#FFFFFF",
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#FFFFFF",
    background: "#000000",
    card: "#000000",
  },
};

export default function App() {
  const [mode, setMode] = useState(false);
  // const [theme, setTheme] = useState(Appearance.getColorScheme());
  // Appearance.addChangeListener((scheme) => {
  //   setTheme(scheme.colorScheme);
  // });

  // useEffect(() => {
  //   console.log("Theme: ", theme);
  // }, [theme]);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  return (
    <>
      <themeContext.Provider value={mode == true ? theme.dark : theme.light}>
        <StatusBar style={mode == true ? "light" : "dark"} />
        <NavigationContainer
          theme={mode == true ? CustomDarkTheme : CustomDefaultTheme}
        >
          <AppNavigator />
        </NavigationContainer>
      </themeContext.Provider>
    </>
  );
}
