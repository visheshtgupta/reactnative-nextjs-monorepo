import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { HomeScreen } from "./Home";
import RootNavigator from "./navigation/root-navigator";

export function App() {
  return <HomeScreen />;
  // return <RootNavigator />;

  // for Nextjs use <HomeScreen />
}

export default App;
