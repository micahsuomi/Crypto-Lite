import React from 'react'

import Routes from './Routes'
import { ThemeProvider } from './contexts'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </div>
  )
}
