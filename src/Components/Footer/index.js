import React from 'react'
import { Foot, Textdiv, Logo, Textdiv2, Textdiv3, Textdiv4, Iconsdiv} from './styles'
import SocialIcon from '../SocialIcon';
import vihouse from '../../Assets/Vi_House.svg';
import InstagramIcon from '../../Assets/instagram.svg';
import TwitterIcon from '../../Assets/twitter.svg';
import FaceBookIcon from '../../Assets/facebook.svg';

export default function Footer() {
  const icons = [
  {name: 'Instagram', src: `${InstagramIcon}`, link: 'https://www.instagram.com/'},
  {name: 'Facebook' , src: `${FaceBookIcon}`, link: 'https://pt-br.facebook.com/'},
  {name: 'Twitter' , src: `${TwitterIcon}`, link: 'https://twitter.com/'}
]
  const redessociais = icons.map((item, index)=>(<SocialIcon src = {item.src} key = {index} href = {`${item.link}`}/>))

  return (
    <Foot>
      <Textdiv>
        <Logo src={vihouse}/>
        <Textdiv2>Vi|House é uma empresa fundada em 2023, 
          sua proposta é tornar o aprendizado musical muito mais 
          facil e acessivel para o publico a partir de aluguel
          dos instrumentos e compra dos mesmos de forma extremamente facil. 
        </Textdiv2>
      </Textdiv>
      <Textdiv3>
        <Textdiv4>Entre nossos serviços estão.. <br/><br/>
          - Aluguel de instrumentos musicais a partir de parceiros terceirizados.<br/>
          - Compra de instumentos musicais a partir de nossos parceiros. <br/><br/>
          Acesse nossas redes sociais e nos conheça mais.
        </Textdiv4>
        <Iconsdiv>
          {redessociais}
        </Iconsdiv>
      </Textdiv3>
    </Foot>
  )
}
