import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderBar from './components/HeaderBar'; // Adjust the path if necessary

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <View style={styles.iconContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d', // Black background for the app
  },
  iconContainer: {
    marginTop: 20, // Add spacing below the HeaderBar
    alignItems: 'center', // Center the UserIcon horizontally
  },
});
