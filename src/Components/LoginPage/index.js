import InputSignIn from '../InputSignIn'
import { Body, LoginTitle} from './styles'
import EmailIcon from "../../Assets/email.svg";
import PasswordIcon from "../../Assets/cadeado.svg";
import ButtonLogin from '../ButtonLogin';

export default function LoginPage( {onClick, onChangeEmail, onChangePassword}) {
  

  return (
    <Body>
      <LoginTitle>Login</LoginTitle>
      <InputSignIn placeholder = 'E-mail' type = "text" src = {EmailIcon} onChange =  {onChangeEmail}/>
      <InputSignIn placeholder = 'Senha' type = "password" src = {PasswordIcon} onChange = {onChangePassword} />
      <ButtonLogin onClick={onClick}/>
    </Body>
  )
}