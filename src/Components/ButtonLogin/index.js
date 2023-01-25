import React from 'react'
import { Button } from './styles'

export default function ButtonLogin({onClick}) {
  return (
    <Button onClick = {onClick}>
      Entrar
    </Button>
  )
}
