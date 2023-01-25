import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HomePage from '../../Components/HomePage'
import { Background } from './styles'

export default function Home() {
  return (
  <Background>
      <Header/>
      <HomePage/>
      <Footer/>
  </Background>
  )
}
