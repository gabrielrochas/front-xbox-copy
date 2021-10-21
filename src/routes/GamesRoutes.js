import React from 'react';
import GuardedRoute from '../components/GuardedRoute/GuardedRoute';
import CreateGame from '../pages/Games/CreateGame/CreateGame';
import GameDetails from '../pages/Games/GameDetails/GameDetails';
import UpdateGame from '../pages/Games/UpdateGame/UpdateGame';

export const GamesRoutes = () => {
  return (
    <>
      <GuardedRoute path='/games/create' component={CreateGame} />
      <GuardedRoute path='/games/details/:id' component={GameDetails} />
      <GuardedRoute path='/games/update/:id' component={UpdateGame} />
    </>
  );
};
