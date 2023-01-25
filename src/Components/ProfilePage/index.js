import React from 'react'
import { Body, ProfileImg, DivText} from './styles'
import FotoPerfil from '../../Assets/FotoPerfil.jpg'
import {useParams} from 'react-router-dom'



export default function ProfilePage() {
  
  const {id} = useParams();
  const user = {name: 'Músico', email: 'musico@email.com', instrumento: 'Viola clássica', id: id};

  return (
    <Body>
      <ProfileImg src = {FotoPerfil}/>
        <DivText>
        - Nome: {user.name} <br/>
        - Email: {user.email} <br/>
        - Instrumento principal: {user.instrumento}<br/>
        - ID: {user.id}<br/>
        </DivText>
        
    </Body>
  )
}