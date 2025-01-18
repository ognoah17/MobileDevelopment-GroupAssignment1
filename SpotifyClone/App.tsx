import React from "react";
import { View } from "react-native";
import HeaderBar from "./components/HeaderBar"; // Adjust the path if necessary
import globalStyles from "./styles"; // Import the global styles

export default function App() {
  return (
    <View style={globalStyles.container}>
      <HeaderBar />
      <View style={globalStyles.iconContainer}>
        {/* Add additional components like UserIcon here */}
      </View>
    </View>
  );
}
