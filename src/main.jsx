import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"

// teal primary, amber secondary, soft background neutrals
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#006d77" },
    secondary: { main: "#ffb703" },
    background: { default: "#f6f7fb", paper: "#ffffff" },
    text: { primary: "#1f2937", secondary: "#4b5563" },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "0 2px 10px rgba(0,0,0,0.06)" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { border: "1px solid #eef2f7" },
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
