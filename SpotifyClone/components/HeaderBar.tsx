import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors as Colors } from "../styles";

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      {/* User Icon */}
      <TouchableOpacity>
        <View style={styles.userIcon}>
          <Text style={styles.userIconText}>N</Text>
        </View>
      </TouchableOpacity>

      {/* Buttons */}
      <TouchableOpacity style={[styles.oval, styles.allButton, styles.buttonSpacing]}>
        <Text style={styles.allButtonText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.musicButton, styles.buttonSpacing]}>
        <Text style={styles.musicText}>Music</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.podcastButton, styles.buttonSpacing]}>
        <Text style={styles.podcastText}>Podcasts</Text>
      </TouchableOpacity>
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
    marginTop: 45, // Push header down from the top
    marginBottom: -20,
  },
  oval: {
    width: 70, // Default width
    height: 45, // Oval height
    borderRadius: 50, // Ensures the oval shape
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
  },
  allButton: {
    backgroundColor: Colors.SpotifyGreen, // Spotify green for "All"
  },
  allButtonText: {
    color: Colors.textDark, // Black text for "All"
    fontSize: 14, // Font size
    fontWeight: "bold", // normal font
  },
  musicButton: {
    width: 90, // Slightly longer than the default button
    height: 45, // Maintain height consistent with other buttons
    borderRadius: 50, // Ensures oval shape
    backgroundColor: Colors.lightGrey, // Dark gray
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
  },
  musicText: {
    color: Colors.textLight, // White text for "Music"
    fontSize: 14, // Font size
    fontWeight: "bold", // normal font
  },
  podcastButton: {
    width: 110, // Width for podcast button
    height: 45, // Height for podcast button
    borderRadius: 50, // Ensures circular/oval shape
    backgroundColor: Colors.lightGrey, // Dark gray
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
  },
  podcastText: {
    color: Colors.textLight, // White text for "Podcasts"
    fontSize: 14, // Explicitly set font size for "Podcasts"
    fontWeight: "bold", // normal font
  },
  userIcon: {
    width: 35, // Circle diameter
    height: 35, // Circle diameter
    backgroundColor: "#b29bc9", // Purple background
    borderRadius: 30, // Makes the shape a circle
    justifyContent: "center", // Center text inside
    alignItems: "center", // Center text inside
    marginRight: 10, // Space between user icon and first button
  },
  userIconText: {
    color: Colors.textDark, // Black text
    fontSize: 14, // Font size for the letter
    fontWeight: "bold", // Regular font
  },
  buttonSpacing: {
    marginHorizontal: 4, // Consistent spacing between buttons
  },
});
