import GuardedRoute from '../components/GuardedRoute/GuardedRoute';
import UserDetails from '../pages/Users/UserDetails';

export const UserRoute = () => {
  return (
    <>
      <GuardedRoute path='/user/:id' component={UserDetails} />
    </>
  );
};
