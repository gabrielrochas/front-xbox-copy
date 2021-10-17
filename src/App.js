import { Route, Switch } from 'react-router-dom';
import CreateGame from './pages/Games/CreateGame/CreateGame';
import GameDetails from './pages/Games/GameDetails/GameDetails';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/login' component={Login} />
        <GuardedRoute path='/logout' component={Logout} />
        <GuardedRoute path='/games/create' component={CreateGame} />
        <GuardedRoute path='/games/details/:id' component={GameDetails} />
      </Switch>
    </>
  );
}

export default App;
