import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

