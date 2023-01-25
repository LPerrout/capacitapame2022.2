import React from 'react'
import { ButIcon, ExternalLink } from './styles'

export default function SocialIcon({ src, href}) {
  return (
    
      <ExternalLink href = {href}>
        <ButIcon src = {src}/>
      </ExternalLink>
    
  )
}
