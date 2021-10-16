import { Route, Switch } from 'react-router-dom';
import CreateGame from './pages/Games/CreateGame/CreateGame';
import Login from './pages/Login/Login';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/games/create' component={CreateGame} />
      </Switch>
    </>
  );
}

export default App;
