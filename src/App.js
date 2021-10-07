import { Route, Switch } from "react-router-dom";
import CreateGame from "./pages/Games/CreateGame/CreateGame";

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/games/create" component={CreateGame} />
      </Switch>
    </div>
  );
}

export default App;
