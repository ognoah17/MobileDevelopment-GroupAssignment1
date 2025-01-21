Here's a neatly formatted version of your README:

---

# **README: Spotify-Like React Native App**
**Contributors**: Noah Jobse, Nic Simard, Jacob Jobse  
**Course**: Mobile Application Development, SAIT 2025  

---

## **Project Overview**
This project is a **Spotify mobile application clone** built using React Native. It features a navigation header, recent item showcases, and an upcoming releases section. The app emulates Spotify's UI, prioritizing responsive design, layout alignment, and consistent theming.

---

## **Features**
### **1. Header Bar**
- User icon (initials) with navigation buttons: **All**, **Music**, and **Podcasts**.
- Oval button styling for a modern aesthetic.

### **2. Recent Showcase Section**
- Displays a responsive grid of recently played items (albums, playlists, etc.).
- Evenly spaced grid layout for visual consistency.

### **3. Upcoming Release Section**
- Highlights an artist’s upcoming release with:
  - Image, album details, and a "Pre-save" button.
  - Styled album title, subtitle, and interactive button.

### **4. Theming**
- Dark and light mode options inspired by Spotify's color palette.

### **5. Reusability**
- Modular components (`HeaderBar`, `RecentShowcase`, `UpcomingRelease`) for easy integration and testing.
- Centralized global styles for consistency.

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
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo-name/spotify-like-app.git
   cd spotify-like-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   expo start
   ```

4. **Test the app**:  
   Open the app in the **Expo Go** app (on your phone) or use an emulator.

---

## **Usage**
### **Header Bar**
- Navigation buttons:
  - **All**: Displays all media types.
  - **Music**: Filters to show only music-related content.
  - **Podcasts**: Filters to show only podcasts.

### **Recent Showcase**
- Displays a grid of 8 placeholder items (e.g., recently played albums/playlists).

### **Upcoming Release**
- Features:
  - Artist name and image.
  - Album title, release date, and a "Pre-save" button.
- Interactive elements:
  - Simulated "Pre-save" button for user actions.

---

## **Customization**
### **Colors**
Modify the app's color scheme in `styles.js`:
```javascript
const colors = {
  SpotifyGreen: "#1DB954", // Change to your preferred green
  SpotifyBlack: "#121212",
  textDark: "#000000",
  textLight: "#FFFFFF",
};
```

### **Images**
Replace placeholder images in the `assets/images/` directory:
- `mike.jpg`: Artist image.
- `showbiz_album_cover.jpg`: Album cover.

### **Recent Showcase Items**
Modify the `RecentShowcase` component to display real data.

---

## **Code Highlights**
### **Global Styles**
Centralized styles for theming:
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
Reusable styles for navigation buttons:
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

---

## **Citations**
- Ryan Solomon (2022). *Code Ryan* [Spotify Podcast]. Retrieved from [Spotify](https://open.spotify.com/show/4mdxC9Ll4dQH4JaWFvQwGH)  
- Brian Jenney (2021). *Develop Yourself* [Spotify Podcast]. Retrieved from [Spotify](https://open.spotify.com/show/69BHCbRAl6rHT9LlNhFWUy/more-popular-episodes)  
- Spotify (2024). *Gaming Lo-Fi Mix* [Spotify Playlist]. Retrieved from [Spotify](https://open.spotify.com/playlist/37i9dQZF1EIgwyClzn2a9h)  
- Michael Jordan Bonema (2017). *MIKE* [Spotify Artist]. Retrieved from [Spotify](https://open.spotify.com/artist/1wlzPS1hSNrkriIIwLFTmU)  
- Michael Jordan Bonema (2025). *Showbiz!* [Spotify Album]. Retrieved from [Spotify](https://open.spotify.com/prerelease/3khZbOeJfYINUdiddYqwnp)  

---

This README ensures clarity, professionalism, and ease of use. If you'd like to add or revise anything, let me know!
