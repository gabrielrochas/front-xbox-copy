import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Api } from '../../api/Api';

const CtaScope = tw.div`
  w-full
  md:min-h-full
  bg-cover
  bg-center
  bg-white
  overflow-hidden

`;
const CtaBg = styled(CtaScope)`
  height: 500px;
  background-image: url(${(props) => props.imgurl});
`;
const CtaContent = tw.div`
  flex
  items-center
  justify-center
  h-full
  w-full
`;
const CtaText = tw.div`
  text-left
`;
const CtaH1 = tw.h1`
  text-white
  text-2xl font-semibold uppercase md:text-3xl
`;

export const GameCta = (props) => {
  const id = props.id || 2;
  const [game, setGame] = useState(2);

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readGameByIdUrl(id),
        true
      );
      const results = await response.json();
      setGame(results);
    };
    loadGame();
  }, [id]);
  return (
    <CtaBg imgurl={game.cover}>
      <CtaContent>
        <CtaText>
          <CtaH1></CtaH1>
        </CtaText>
      </CtaContent>
    </CtaBg>
  );
};
