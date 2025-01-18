import React from 'react';
import { StyleSheet, View } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.oval} />
      <View style={styles.oval} />
      <View style={styles.oval} />
    </View>
  );
};

export default HeaderBar; // Correct export name

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange ovals horizontally
    justifyContent: 'space-evenly', // Space them evenly
    alignItems: 'center', // Center vertically
    backgroundColor: '#191414', // Background color (Spotify black)
    height: 80, // Height of the header
    paddingHorizontal: 20, // Padding on the sides
    marginTop: 65, // Push down from the top
  },
  oval: {
    width: 60, // Increase width for long ovals
    height: 40, // Smaller height for sideways appearance
    backgroundColor: '#1DB954', // Spotify green
    borderRadius: 50, // Makes the shape an oval
  },
});
