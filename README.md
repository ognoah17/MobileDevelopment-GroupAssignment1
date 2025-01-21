# **README: Spotify-Like React Native App**
Noah Jobse - Nic Simard - Jacob Jobse

## **Project Overview**
This project is a **Spotify mobile application** clone built using React Native. The app features a header bar with navigation buttons, showcases recently played items, and displays upcoming releases. It is designed with a focus on responsive design, proper layout alignment, and a consistent theme that resembles Spotify's UI. It was built for Mobile Application Development SAIT 2025.

---

## **Features**
1. **Header Bar**:
   - Displays a user icon (with initials) and navigation buttons: "All," "Music," and "Podcasts."
   - Styled using an oval button design to create a modern look.

2. **Recent Showcase Section**:
   - Displays a grid of recent items (e.g., albums, playlists).
   - Responsive grid layout with evenly spaced elements.

3. **Upcoming Release Section**:
   - Highlights an artist’s upcoming release with their image, album details, and a "Pre-save" button.
   - Includes styled album titles, subtitles, and an interactive button.

4. **Theming**:
   - Uses a color palette inspired by Spotify.
   - Includes dark and light modes through the use of custom colors.

5. **Reusability**:
   - Modular components (`HeaderBar`, `RecentShowcase`, `UpcomingRelease`) for easy integration and testing.
   - Shared global styles for consistency.

---

## **File Structure**
The project is organized for clarity and maintainability:
```
root/
├── assets/                  # Static assets (e.g., images)
├── components/              # Modular React components
│   ├── HeaderBar.js         # Header section with user icon and buttons
│   ├── RecentShowcase.js    # Grid layout for recent items
│   └── UpcomingRelease.js   # Upcoming releases display
├── styles.js                # Shared styles and color definitions
├── App.js                   # Main application entry point
└── README.md                # Documentation
```

---

## **Setup Instructions**
### **Prerequisites**
- Node.js (v14 or later)
- npm or yarn
- Expo CLI (for quick development and testing)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/spotify-like-app.git
   cd spotify-like-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   expo start
   ```

4. Open the app in the Expo Go app (on your phone) or use an emulator.

---

## **Usage**
### **Header Bar**
- The `HeaderBar` component provides navigation buttons:
  - **All**: Highlights all media types.
  - **Music**: Filters to show only music-related content.
  - **Podcasts**: Filters to show only podcasts.

### **Recent Showcase**
- Displays a grid of 8 placeholder items. These items can represent recently played albums or playlists.

### **Upcoming Release**
- Features:
  - Artist name and image.
  - Album title, release date, and a "Pre-save" button.
- Interactive elements include:
  - Pre-save button for simulated user actions.

---

## **Customization**
- **Colors**:
  Update `styles.js` to modify the app's color scheme:
  ```javascript
  const colors = {
    SpotifyGreen: "#1DB954", // Change to your preferred green
    SpotifyBlack: "#121212",
    textDark: "#000000",
    textLight: "#FFFFFF",
  };
  ```

- **Images**:
  Replace placeholder images in the `assets/images/` directory:
  - `mike.jpg`: Artist image.
  - `showbiz_album_cover.jpg`: Album cover.

- **Recent Showcase Items**:
  Modify the `RecentShowcase` component to use real data.

---

## **Code Highlights**
### **Global Styles**
Centralized styling for consistent theming:
```javascript
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SpotifyBlack,
  },
  iconContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
```

### **Header Bar**
Reusability through shared styles:
```javascript
const styles = StyleSheet.create({
  oval: {
    width: 70,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  allButton: {
    backgroundColor: Colors.SpotifyGreen,
  },
});
```

Citations:

Ryan Solomon.(2022).Code Ryan[Spotify Podcast].Retrieved from https://open.spotify.com/show/4mdxC9Ll4dQH4JaWFvQwGH

Brian Jenney.(2021).Develop Yourself[Spotify Podcast].https://open.spotify.com/show/69BHCbRAl6rHT9LlNhFWUy/more-popular-episodes

Spotify.(2024).Gaming Lo-Fi Mix[Spotify Playlist].https://open.spotify.com/playlist/37i9dQZF1EIgwyClzn2a9h

Spotify.(2024).Jazz for Sleep[Spotify Playlist].https://open.spotify.com/playlist/37i9dQZF1DXa1rZf8gLhyz

Spotify.(2025).Liked Songs[Spotify Playlist].https://open.spotify.com/collection/tracks

Michael Jordan Bonema.(2017).MIKE[Spotify Artist].https://open.spotify.com/artist/1wlzPS1hSNrkriIIwLFTmU

Michael Jordan Bonema.(2025).Showbiz![Spotify Album].https://open.spotify.com/prerelease/3khZbOeJfYINUdiddYqwnp

Westside Gunn.(2020).Pray for Paris[Spotify Album].https://open.spotify.com/album/6nfJMRoIjyRwk3ZTHNm0PY

Chill Select.().productive work lofi concentration focus & study music[Spotify Playlist].https://open.spotify.com/playlist/3cnkhyqinMpD5O6f6qh5l4

FrankJavCee.(2016).SimpsonWave1995[Spotify Song].https://open.spotify.com/track/0qqRNnwh86N1XBV94GVgQN
