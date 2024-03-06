import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Signin/>}/>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/' element={<Profile/>}/>
    <Route path='/' element={<About/>}/>
  </Routes>
  </BrowserRouter>
}

export default App