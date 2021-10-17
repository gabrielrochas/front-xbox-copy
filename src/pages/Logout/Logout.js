import { Redirect } from 'react-router-dom';
import { JwtHandler } from '../../jwt-handler/JwtHandler';

export default function Logout() {
  JwtHandler.clearJwt();
  return <Redirect to='/login' />;
}
