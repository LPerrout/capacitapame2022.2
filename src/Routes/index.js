import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import SignIn from '../Pages/SignIn'

export default function Rotas() {
  return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path= "*" element={<h1>Not Found</h1>}/>
        </Routes>
  )
}
