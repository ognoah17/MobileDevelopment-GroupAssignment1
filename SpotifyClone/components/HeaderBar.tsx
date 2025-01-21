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
    height: 80, // Set the height of the header
    paddingHorizontal: 10, // Add horizontal padding
    marginTop: 45, // Margin from the top
    marginBottom: -20, // Negative margin at the bottom
  },
  oval: {
    width: 70, // Default width for oval buttons
    height: 45, // Height for oval buttons
    borderRadius: 50, // Make the button oval
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  },
  allButton: {
    backgroundColor: Colors.SpotifyGreen, // Background color for "All" button
  },
  allButtonText: {
    color: Colors.textDark, // Text color for "All" button
    fontSize: 14, // Font size for "All" button text
    fontWeight: "bold", // Font weight for "All" button text
  },
  musicButton: {
    width: 90, // Width for "Music" button
    height: 45, // Height for "Music" button
    borderRadius: 50, // Make the button oval
    backgroundColor: Colors.lightGrey, // Background color for "Music" button
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  },
  musicText: {
    color: Colors.textLight, // Text color for "Music" button
    fontSize: 14, // Font size for "Music" button text
    fontWeight: "bold", // Font weight for "Music" button text
  },
  podcastButton: {
    width: 110, // Width for "Podcasts" button
    height: 45, // Height for "Podcasts" button
    borderRadius: 50, // Make the button oval
    backgroundColor: Colors.lightGrey, // Background color for "Podcasts" button
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  },
  podcastText: {
    color: Colors.textLight, // Text color for "Podcasts" button
    fontSize: 14, // Font size for "Podcasts" button text
    fontWeight: "bold", // Font weight for "Podcasts" button text
  },
  userIcon: {
    width: 35, // Diameter for user icon
    height: 35, // Diameter for user icon
    backgroundColor: "#b29bc9", // Background color for user icon
    borderRadius: 30, // Make the icon circular
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
    marginRight: 10, // Margin to the right of the user icon
  },
  userIconText: {
    color: Colors.textDark, // Text color for user icon
    fontSize: 14, // Font size for user icon text
    fontWeight: "bold", // Font weight for user icon text
  },
  buttonSpacing: {
    marginHorizontal: 4, // Horizontal margin between buttons
  },
});
