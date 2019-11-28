import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Customnav from './components/customnav'


function App() {
  return (
    <Router>
      <div>
        <Customnav />
      </div>
    </Router>
  )
}

export default App
