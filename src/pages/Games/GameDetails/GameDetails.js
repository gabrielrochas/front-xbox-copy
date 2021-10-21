import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../api/Api';

import { GameCta } from '../../../components/CtaOne/CtaOne';
import { Container } from '../../../styles/Container';
import Header from '../../../components/Header';
import { DivDetails } from './styles';

export default function GameDetails(props) {
  const id = props.match.params.id;
  const [game, setGame] = useState('');

  useEffect(() => {
    const loadGame = async () => {
      const resp = await Api.buildApiGetRequest(Api.readGameByIdUrl(id), true);
      const result = await resp.json();
      setGame(result);
    };
    loadGame();
  }, [id]);
  if (!game) {
    return <div>Loading...</div>;
  }
  // Verify if game has genres
  const gnrLength = game.genres.length ? true : false;
  // Verify if game has user profiles
  const prfLength = game.profiles.length ? true : false;

  return (
    <div>
      <Header />
      <Container>
        <GameCta id={game.id} />
        <h1 className='mt-3 mb-1 text-white text-3xl'>{game.title}</h1>

        <hr className='text-white my-2' />
        <DivDetails>
          <span className='mr-1'>Imdb Rating: {game.imdbRating}</span>
          <span>- Launch: {game.launchYear}</span>
        </DivDetails>
        {gnrLength ? (
          <DivDetails>
            <span>
              Genres:
              {game.genres.map(
                (genre, index) => `
            ${index > 0 ? ' | ' : ''} ${genre.genre}`
              )}
            </span>
          </DivDetails>
        ) : (
          ''
        )}
        {prfLength ? (
          <DivDetails>
            <span>
              Users Profiles:
              {game.profiles.map(
                (genre, index) => `
            ${index > 0 ? ' | ' : ''} ${genre.genre}`
              )}
            </span>
          </DivDetails>
        ) : (
          ''
        )}
        <DivDetails>
          <a
            href={game.gamePlayUrl}
            target='blank'
            className='mr-1 hover:underline'
          >
            Game Play Link
          </a>
        </DivDetails>

        <DivDetails>
          <a
            href={game.youtubeUrl}
            target='blank'
            className='mr-1 hover:underline'
          >
            Watch Video
          </a>
        </DivDetails>

        <hr className='text-white my-2' />
        <h3 className='py-2 text-white text-xl'>Description</h3>
        <p className='text-white'>{game.description}</p>
        <Link to={`/games/update/${game.id}`} className='text-white'>
          Edit
        </Link>
      </Container>
    </div>
  );
}
