import React, {useState} from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { Background } from './styles'
import LoginPage from '../../Components/LoginPage'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user1 = {email: 'musico@email.com', password: 'viola'};

  function LogIn() {
    if (user1.email === email && user1.password === password){
      navigate('/home');
      console.log('Logado com sucesso');
    }
    else {
      console.log('Foi foi possivel logar')}

  }
  return (
    <Background>
      <Header/>
      <LoginPage 
      onChangeEmail = {(text)=>(setEmail(text.target.value))} 
      onChangePassword = {(text) => (setPassword(text.target.value))}
      onClick = {LogIn}/>
      <Footer/>
    </Background>
  )
}
