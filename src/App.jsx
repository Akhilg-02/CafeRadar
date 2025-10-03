
import './App.css'
import CafeMarkers from './components/CafeMarkers'
import 'leaflet/dist/leaflet.css';

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material"
import LocalCafeIcon from "@mui/icons-material/LocalCafe"



function App() {
  return (
    <>
      <div className="app-root">
        <header className="app-header">
          <h1>Find Nearby Cafes</h1>
          <p>Allow location access to see cafes near you.</p>
        </header>
        <main className="app-main">
         <CafeMarkers/>
        </main>
      </div>
    </>
  )
}

export default App
