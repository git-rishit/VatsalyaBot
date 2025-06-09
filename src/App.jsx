import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Home from './Pages/Home.jsx'
import ChatBox from './Pages/ChatBox.jsx'
import About from './Pages/About.jsx'
import HelpSupport from './Pages/Help&Support.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbox" element={<ChatBox />} />
          <Route path="/about" element={<About />} />
          <Route path="/helpandsupport" element={<HelpSupport />} />
        </Routes>
      </Router>
    </div>
  )
}
