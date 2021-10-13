import React from 'react';
import GamesList from '../../components/GamesList/GamesList';
import Header from '../../components/Header/Header';
import tw from 'tailwind-styled-components';

export function Home() {
  const Container = tw.div`
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
  `;
  return (
    <div>
      <Header />
      <Container>
        <GamesList />
      </Container>
    </div>
  );
}
