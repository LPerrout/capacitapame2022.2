import React from 'react'
import { Inputin, InputContainer, LabelContainer, Icon} from './styles'

export default function InputSignIn({placeholder, type, src, onChange}) {
  return (
    <InputContainer>
        <LabelContainer ><Icon src = {src}></Icon></LabelContainer>
        <Inputin type = {type} placeholder = {placeholder} onChange = {onChange}/>
    </InputContainer>
  )
}
