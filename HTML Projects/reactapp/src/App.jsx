import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
