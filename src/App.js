import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import { UserRoute } from './routes/UserRoute';
import { GamesRoutes } from './routes/GamesRoutes';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/login' component={Login} />
        <GuardedRoute path='/logout' component={Logout} />
        <GamesRoutes />
        <UserRoute />
      </Switch>
    </>
  );
}

export default App;
