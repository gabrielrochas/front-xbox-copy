import React from 'react';
import GamesList from '../../components/GamesList/GamesList';
import Header from '../../components/Header';
import { GameCta } from '../../components/CtaOne/CtaOne';

import { Container } from '../../styles/Container';

export function Home() {
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
