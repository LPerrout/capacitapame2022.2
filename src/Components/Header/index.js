import React from 'react'
import { Head, Logo, Butdiv } from './styles'
import vihouse from '../../Assets/Vi_House.svg';
import Buttoms from '../Buttom';



export default function Header() {
  const bots = [
    {name: 'Loja', link: '/home'},
    {name: 'Perfil', link: '/profile'},
    {name: 'Login', link: '/'}
  ]

  return (
    <Head>
        <Logo src={vihouse}></Logo>
        <Butdiv>
          {bots.map((item, index)=>(<Buttoms key = {index} name = {item.name} link = {item.link}></Buttoms>))}
        </Butdiv>
    </Head>
  )
}
