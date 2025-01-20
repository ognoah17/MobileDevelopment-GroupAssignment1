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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 0,
  },
  box: {
    width: "45%",
    height: 55,
    backgroundColor: Colors.darkGrey,
    margin: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  image: {
    width: 60,
    height: 55,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    overflow: "hidden",
  },
});

export default RecentShowcase;
