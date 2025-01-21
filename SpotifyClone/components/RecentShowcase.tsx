import React from "react";
import { View, StyleSheet, Image, Text, ImageSourcePropType, Dimensions, TouchableOpacity } from "react-native";
import { colors as Colors } from "../styles";

const RecentShowcase: React.FC = () => {
  const data: { text: string; image: ImageSourcePropType }[] = [
    { text: "productive work", image: require("../assets/images/productiveWork.png") },
    { text: "Jazz for Sleep", image: require("../assets/images/jazzForSleep.png") },
    { text: "Pray for Paris", image: require("../assets/images/prayForParis.png") },
    { text: "Develop Yourself", image: require("../assets/images/developYourself.png") },
    { text: "Code Ryan", image: require("../assets/images/codeRyan.png") },
    { text: "Liked Songs", image: require("../assets/images/likedSongs.png") },
    { text: "SimpsonWave1995", image: require("../assets/images/simpsonWave1995.png") },
    { text: "Gaming Lo-Fi Mix", image: require("../assets/images/gamingLoFi.png") },
  ];

  const { width } = Dimensions.get("window");
  const dynamicFontSize = width * 0.04; // Adjust this value as needed

  const handlePress = (text: string) => {
    console.log(`Pressed: ${text}`);
    // Add your navigation or other logic here
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.box} onPress={() => handlePress(item.text)}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, { fontSize: dynamicFontSize }]} numberOfLines={2}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange items in a row
    flexWrap: "wrap", // Allow items to wrap to the next line
    justifyContent: "space-evenly", // Distribute items evenly with space between them
    alignItems: "center", // Center items vertically
    padding: 0, // No padding
  },
  box: {
    width: "45%", // Box width as a percentage of the container
    height: 55, // Fixed height
    backgroundColor: Colors.darkGrey, // Background color from the Colors object
    margin: 5, // Margin around each box
    borderRadius: 5, // Rounded corners
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Center children vertically
    paddingHorizontal: 0, // No horizontal padding
  },
  image: {
    width: 60, // Fixed width for the image
    height: 55, // Fixed height for the image
    borderRadius: 5, // Rounded corners for the image
  },
  textContainer: {
    flex: 1, // Take up remaining space
    margin: 5, // Margin around the text container
  },
  text: {
    color: "#fff", // White text color
    fontWeight: "bold", // Bold text
    textAlign: "left", // Align text to the left
    overflow: "hidden", // Hide overflow text
  },
});

export default RecentShowcase;
