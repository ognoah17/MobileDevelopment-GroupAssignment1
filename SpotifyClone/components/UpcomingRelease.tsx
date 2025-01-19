import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors as Colors } from "../styles";

const UpcomingRelease = () => {
  return (
    <View style={styles.container}>
      <View style={styles.artistContainer}>
        <Image
          source={require("../assets/images/mike.jpg")}
          style={styles.artistImage}
        />
        <View style={styles.columnContainer}>
          <Text style={styles.upcomingText}>Upcoming release from</Text>
          <Text style={styles.artistText}>MIKE</Text>
        </View>
      </View>
      <View style={styles.albumContainer}>
        <Image
          source={require("../assets/images/showbiz_album_cover.jpg")}
          style={styles.albumImage}
        />
        <View style={styles.columnContainer}>
          <Text style={styles.albumTitle}>Album</Text>
          <Text style={styles.albumSubtitle}>SHOWBIZ</Text>
          <Text style={styles.albumSubtitle}>January 30, 2025</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pre-save</Text>
            <Text style={styles.plusIcon}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpcomingRelease;

const styles = StyleSheet.create({
  // Main container for the component
  container: {
    height: 100, // Fixed height for the container
    width: "100%", // Full-width container
    paddingHorizontal: 10, // Adds horizontal padding to the container
  },

  // Layout for the artist section (image and text)
  artistContainer: {
    flexDirection: "row", // Arranges child elements in a row
    width: "100%", // Full-width container
    paddingVertical: 10, // Adds vertical padding for spacing
  },

  // Styling for the artist's image
  artistImage: {
    width: 65, // Sets the width of the image
    height: 65, // Sets the height of the image
    borderRadius: 100, // Makes the image circular
    marginRight: 15, // Adds spacing to the right of the image
    alignSelf: "center", // Aligns the image vertically in the center of the container
  },

  // Layout for text in a vertical column
  columnContainer: {
    flexDirection: "column", // Arranges child elements in a column
  },

  // Styling for the "Upcoming release from" text
  upcomingText: {
    paddingBottom: 5, // Adds spacing below the text
    color: "#aaacac", // Sets the text color to grey
    fontSize: 14, // Sets the font size
    fontWeight: "bold", // Makes the text bold
  },

  // Styling for the artist's name
  artistText: {
    color: "#FFFFFF", // Sets the text color to white
    fontSize: 35, // Sets the font size to large
    fontWeight: "bold", // Makes the text bold
    alignSelf: "flex-start", // Aligns the text to the start of the container
  },

  // Layout for the album section
  albumContainer: {
    height: 170, // Fixed height for the album section
    flexDirection: "row", // Arranges child elements in a row
    backgroundColor: Colors.lightGrey, // Sets the background color to light grey
    maxWidth: "100%", // Ensures the container does not exceed full width
    borderRadius: 10, // Rounds the corners of the container
    padding: 10, // Adds padding inside the container
    marginTop: 0, // Removes margin at the top
  },

  // Styling for the album cover image
  albumImage: {
    width: 150, // Sets the width of the image
    height: 150, // Sets the height of the image
    borderRadius: 10, // Rounds the corners of the image
    backgroundColor: "#AFEEEE", // Sets a pale turquoise placeholder background color
  },

  // Styling for the album title text
  albumTitle: {
    width: "100%", // Ensures the title takes the full width of the container
    marginLeft: 15, // Adds spacing to the left
    marginTop: 5, // Adds spacing to the top
    color: "#aaacac", // Sets the text color to grey
    fontSize: 20, // Sets the font size
    fontWeight: "normal", // Keeps the text weight normal
  },

  // Styling for the album subtitle text
  albumSubtitle: {
    marginLeft: 15, // Adds spacing to the left
    marginTop: 5, // Adds spacing to the top
    color: "#FFFFFF", // Sets the text color to white
    fontSize: 14, // Sets the font size
    flexWrap: "wrap", // Allows the text to wrap to the next line if needed
    width: 90, // Sets a fixed width for proper wrapping
    fontWeight: "bold", // Makes the text bold
  },

  // Styling for the "Pre-save" button
  button: {
    backgroundColor: "#FFFFFF", // Sets the background color to white
    width: 100, // Sets a fixed width for the button
    height: 35, // Sets a fixed height for the button
    marginLeft: 15, // Adds spacing to the left
    marginBottom: 10, // Adds spacing below the button
    marginTop: 10, // Adds spacing above the button
    borderRadius: 30, // Rounds the corners of the button
    flexDirection: "row", // Arranges child elements (text and icon) in a row
    justifyContent: "center", // Centers the content horizontally
    alignItems: "center", // Centers the content vertically
  },

  // Styling for the button text
  buttonText: {
    fontSize: 12, // Sets the font size
    fontWeight: "bold", // Makes the text bold
    margin: 5, // Adds spacing around the text
    color: "#FFFFF", // Sets the text color to white
  },

  // Styling for the "+" icon in the button
  plusIcon: {
    fontSize: 12, // Sets the font size
    fontWeight: "bold", // Makes the text bold
    color: "#FFFFF", // Sets the text color to white
  },
});
