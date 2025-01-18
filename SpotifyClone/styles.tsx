import { StyleSheet } from "react-native";

const colors = {
  SpotifyGreen: "#10cb50",
  SpotifyBlack: "#0d0d0d",
  textDark: "#000000",
  textLight: "#ffffff",
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SpotifyBlack, // Use SpotifyBlack as the app's background color
  },
  iconContainer: {
    marginTop: 20, // Spacing below the HeaderBar
    alignItems: "center", // Center the UserIcon horizontally
  },
});

export default globalStyles;
