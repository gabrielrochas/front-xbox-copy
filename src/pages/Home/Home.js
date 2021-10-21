import React from 'react';
import GamesList from '../../components/GamesList/GamesList';
import Header from '../../components/Header';
import { GameCta } from '../../components/CtaOne/CtaOne';

import { Container } from '../../styles/Container';

export function Home() {
    console.log(process.env.REACT_APP_API_URL);
  return (
    <div>
      <Header />
      <Container>
        <GameCta />
        <GamesList />
      </Container>
    </div>
  );
}
