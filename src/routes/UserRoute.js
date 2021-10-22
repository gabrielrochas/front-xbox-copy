import { Route } from 'react-router-dom';
import GuardedRoute from '../components/GuardedRoute/GuardedRoute';
import { CreateUser } from '../pages/Users/CreateUser/CreateUser';
import UserDetails from '../pages/Users/UserDetails';

export const UserRoute = () => {
  return (
    <>
      <GuardedRoute path='/user/:id' component={UserDetails} />
      <Route path='/signup' component={CreateUser} />

    </>
  );
};
