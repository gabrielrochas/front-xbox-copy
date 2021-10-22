import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import { GamesRoutes } from './routes/GamesRoutes';
import { CreateUser } from './pages/Users/CreateUser/CreateUser';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/login' component={Login} />
        <GuardedRoute path='/logout' component={Logout} />

        <Route path='/signup' component={CreateUser} />
        <GamesRoutes />
      </Switch>
    </>
  );
}

export default App;
