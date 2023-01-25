import React from 'react'
import Header from '../../Components/Header'
import { Background } from './styles'
import Footer from '../../Components/Footer'
import ProfilePage from '../../Components/ProfilePage'

export default function Profile() {
  return (
    <Background>
      <Header/>
      <ProfilePage></ProfilePage>
      <Footer/>
    </Background>
  )
}
