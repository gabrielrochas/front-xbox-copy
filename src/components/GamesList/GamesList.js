import React, { useEffect, useState } from 'react';
import { Api } from '../../api/Api';
import tw from 'tailwind-styled-components';

import {
  CardWrapper,
  CardOverlay,
  CardContent,
  CardH3,
  CardLink,
  CardSpan,
} from '../GameCard/GameCard';

const Section = tw.section`
  mt-6
  grid
  grid-cols-1
  md:grid-cols-3
  lg:grid-cols-3
  gap-x-6
  gap-y-8
`;

export default function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGamesList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());
      const results = await response.json();
      setGames(results);
    };
    loadGamesList();
  }, []);

  return (
    <Section>
      {games.map((game, index) => (
        <a href={`games/${game.id}`} key={`game-list-${index}`}>
          <CardWrapper imgurl={game.cover}>
            <CardOverlay />
            <CardContent>
              <CardH3>
                <CardLink>
                  <CardSpan />
                  {game.title}
                </CardLink>
              </CardH3>
            </CardContent>
          </CardWrapper>
        </a>
      ))}
    </Section>
  );
}
