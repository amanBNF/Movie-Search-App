import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites.jsx'
import Home from './components/Home.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} /> 
      </Routes>
    </Router>
  )
}

export default App
