# ☕ Nearby Cafes Finder

A **React application** that helps users find nearby cafes on a map.  
The app displays:  
- User’s current location (via browser geolocation API).  
- A list of cafes from `cafe.json`.  
- A Leaflet map with markers for each cafe.  
- A sidebar with cafe names — clicking a name pans/flies the map to the corresponding cafe marker.  

---

## 🚀 Features
- **Geolocation support** → shows your current location on the map.  
- **Cafe markers** → loads cafes from a static `cafe.json` file.  
- **Sidebar navigation** → click a cafe from the list to fly to its marker.  
 
---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nearby-cafes.git
   cd nearby-cafes

2. **Install dependencies**
   ```bash
   npm install

3. **Start the development server**
   ```bash
   npm run dev

4. **Start the development server**
   ```bash
   http://localhost:5173 (default Vite port)


## 📂 Project Structure
    src/
    ├── components/
    │    ├── CafeMarkers.jsx   # Map + sidebar + cafes
    │    ├── FlyToCafe.jsx     # Smooth fly-to logic 
    │    └── CafeList.jsx      # List of cafes
    ├── cafes.json             # Static cafe data
    ├── App.jsx
    └── main.jsx

---

## 🧪 Tests

Currently, no formal test cases are implemented.
You can test manually by: 
- Verifying geolocation works in your browser.

- Clicking cafes in the sidebar → map should fly to the correct marker.

- Clicking cafe markers → popups display cafe names.
 
---

## 💡 Assumptions & Design Choices

- Cafe data is stored locally in cafe.json. (Can be swapped with an API later.)

- Geolocation requires browser permission. If denied, app defaults to India center.

- Map library: React-Leaflet
 chosen for simplicity and strong ecosystem support.
 
