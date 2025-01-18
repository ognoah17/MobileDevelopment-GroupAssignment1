import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderBar from './components/HeaderBar'; // Adjust the path if necessary

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background for the app
  },
});
