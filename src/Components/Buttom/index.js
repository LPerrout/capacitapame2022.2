import React from 'react'
import { Buttom, Tag} from './styles'
import {Link} from "react-router-dom"



export default function Buttoms({link, name, onClick}) {
  return (
    <Link style={{textDecoration: 'none'}} to = {link}>
      <Buttom onCLick = {onClick}><Tag>{name}</Tag></Buttom>
    </Link>
    )
}
