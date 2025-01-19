import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors as Colors} from "../styles";

const UpcomingRelease = () => {
  return (
    <View style={styles.container}>
        <View style={styles.artistContainer}>
            <Image
                source={require('../assets/images/mike.jpg')}
                style={styles.artistImage}
            />
            <View style={styles.columnContainer}>
                <Text style={styles.upcomingText}>Upcoming release from</Text>
                <Text style={styles.artistText}>MIKE</Text>
            </View>
        </View>
        <View style={styles.albumContainer}>
            <Image
                source={require('../assets/images/showbiz_album_cover.jpg')}
                style={styles.albumImage}
            />
            <View style={styles.columnContainer}>
                <Text style={styles.albumTitle}>Album Showbiz! January 30, 2025</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pre-s... ⊕</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default UpcomingRelease;

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingHorizontal: 10,
  },
  artistContainer: {
    flexDirection: "row",
    width: '100%',
    paddingVertical: 30,
  },
  artistImage: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginTop: 10,
    marginRight: 15,
  },
  columnContainer: {
    flexDirection: "column",
  },
  upcomingText: {
    paddingBottom: 5,
    color: Colors.textLight,
    fontSize: 25,
    fontWeight: "bold",
  },
  artistText: {
    color: Colors.textLight,
    fontSize: 35,
    fontWeight: "bold",
  },
  albumContainer: {
    flexDirection: "row",
    backgroundColor: Colors.darkGrey,
    maxWidth: '100%',
    borderRadius: 10,
  },
  albumImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  albumTitle: {
    marginLeft: 15,
    marginTop: 15,
    color: Colors.textLight,
    fontSize: 25,
    fontWeight: "bold",
    maxWidth: '70%',
  },
  button: {
    backgroundColor: 'white',
    width: '55%',
    height: 35,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});