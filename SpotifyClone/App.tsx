import React from "react";
import { View } from "react-native";
import HeaderBar from "./components/HeaderBar"; // Adjust the path if necessary
import RecentShowcase from "./components/RecentShowcase"; // Import the RecentShowcase component
import { colors as Colors, globalStyles } from "./styles";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <HeaderBar />
      <View style={globalStyles.iconContainer}>
        {/* Add additional components like UserIcon here */}
      </View>
      <RecentShowcase /> {/* Add the RecentShowcase component */}
    </View>
  );
}
