import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      {/* User Icon */}
      <View style={styles.userIcon}>
        <Text style={styles.userIconText}>N</Text>
      </View>

      {/* Buttons */}
      <View style={[styles.oval, styles.allButton, styles.buttonSpacing]}>
        <Text style={styles.allButtonText}>All</Text>
      </View>
      <View style={[styles.musicButton, styles.buttonSpacing]}>
        <Text style={styles.otherButtonText}>Music</Text>
      </View>
      <View style={[styles.podcastButton, styles.buttonSpacing]}>
        <Text style={styles.podcastText}>Podcasts</Text>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Center items vertically
    height: 80, // Height of the header
    paddingHorizontal: 10, // Padding on the sides
    marginTop: 65, // Push header down from the top
  },
  oval: {
    width: 70, // Default width
    height: 40, // Oval height
    borderRadius: 50, // Ensures the oval shape
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
  },
  allButton: {
    backgroundColor: "#10cb50", // Spotify green for "All"
  },
  allButtonText: {
    color: "#000000", // Black text for "All"
    fontSize: 14, // Font size
    fontWeight: "bold", // Bold font
  },
  musicButton: {
    width: 75, // Slightly longer than the default button
    height: 40, // Maintain height consistent with other buttons
    borderRadius: 50, // Ensures oval shape
    backgroundColor: "#323233", // Dark gray
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
  },
  otherButtonText: {
    color: "#FFFFFF", // White text for "Music"
    fontSize: 14, // Font size
    fontWeight: "bold", // Bold font
  },
  podcastButton: {
    width: 100, // Width for podcast button
    height: 40, // Height for podcast button
    borderRadius: 50, // Ensures circular/oval shape
    backgroundColor: "#323233", // Dark gray
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
  },
  podcastText: {
    color: "#FFFFFF", // White text for "Podcasts"
    fontSize: 12, // Explicitly set font size for "Podcasts"
    fontWeight: "bold", // Bold font
  },
  userIcon: {
    width: 40, // Circle diameter
    height: 40, // Circle diameter
    backgroundColor: "#6A0DAD", // Purple background
    borderRadius: 30, // Makes the shape a circle
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
    marginRight: 10, // Space between user icon and first button
  },
  userIconText: {
    color: "#000000", // Black text
    fontSize: 18, // Font size for the letter
    fontWeight: "regular", // Regular font
  },
  buttonSpacing: {
    marginHorizontal: 4, // Consistent spacing between buttons
  },
});
