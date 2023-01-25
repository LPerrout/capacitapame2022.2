import React from 'react'
import Card from '../Cards'
import { Body } from './styles'
import Baixo from '../../Assets/baixo.jpg'
import Violino from '../../Assets/violino.jpg'
import Viola from '../../Assets/viola.jpg'

export default function HomePage() {
  const instrumentos = [
    {description: 'Violino artesanal', src: Violino , price: '100'}, 
    {description: 'Baixo modelado preto', src: Baixo , price: '50'},
    {description: 'Viola clássica tradicional', src: Viola, price: '90'}]

  const cards = instrumentos.map((item)=>(<Card src = {item.src} description = {item.description} price = {item.price}/>))

  return (
    <Body>
      {cards}
    </Body>
  )
}
