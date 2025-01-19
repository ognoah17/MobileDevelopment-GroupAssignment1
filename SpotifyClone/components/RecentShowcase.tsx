import React from "react";
import { View, StyleSheet } from "react-native";
import { colors as Colors, globalStyles } from "../styles";

const RecentShowcase: React.FC = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 8 }).map((_, index) => (
        <View key={index} style={styles.box} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children in a row
    flexWrap: "wrap", // Allow wrapping to the next line
    justifyContent: "space-evenly", // Distribute children evenly with space around them
    alignItems: "center", // Align children vertically in the center
    padding: 0, // Add padding around the container
  },
  box: {
    width: "45%", // Set the width of each box to 45% of the container's width
    height: 55, // Set the height of each box to 55 units
    backgroundColor: Colors.darkGrey, // Set the background color of each box to green
    margin: 5, // Add margin around each box
    borderRadius: 5, // Round the corners with a radius of 10 units
  },
});

export default RecentShowcase;
