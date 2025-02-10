import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import Draft from './components/Footer'

const App = () => {
  return (
    <div className="font-Poppins bg-Solitude text-sm">
      <Router>
        <Routes>
          <Route path='/' element={<LandingSection/>}/>
          <Route path='/landing' element={<LandingSection/>}/>
          <Route path='/draft' element={<Draft/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App