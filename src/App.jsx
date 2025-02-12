import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ContainerPage from './components/ContainerPage'
import Draft from './components/Footer'

const App = () => {
  return (
    <div className="font-Poppins bg-Solitude text-sm">
      <Router>
        <Routes>
          <Route path='/' element={<ContainerPage/>}/>
          <Route path='/landing' element={<ContainerPage/>}/>
          <Route path='/draft' element={<Draft/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App