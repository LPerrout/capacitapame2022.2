import React from 'react'
import { Carddiv, Prizediv, Button, Imageproduct, TextPrice} from './styles'

export default function Card({src, description, price }) {
  return (
    <Carddiv>
        <Imageproduct src = {src}/>
        <Prizediv>
            <TextPrice>{description}</TextPrice>
            <TextPrice>${price}</TextPrice>
        </Prizediv>
        <Button>Alugar</Button>
    </Carddiv>
  )
}
