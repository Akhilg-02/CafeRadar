
import './App.css'
import CafeMarkers from './components/CafeMarkers'
import 'leaflet/dist/leaflet.css';

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material"
import LocalCafeIcon from "@mui/icons-material/LocalCafe"



function App() {
  return (
    <>
      <div className="app-root">
        <AppBar position="sticky" color="primary">
          <Toolbar sx={{ display: "flex", gap: 1 }}>
            <LocalCafeIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="div">
              Find Nearby Cafes
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5, flexGrow: 1 }}>
              Allow location access to see cafes near you.
            </Typography>
          </Toolbar>
        </AppBar>
        <main className="app-main">
         <CafeMarkers/>
        </main>
      </div>
    </>
  )
}

export default App