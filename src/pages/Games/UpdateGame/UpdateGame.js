import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../api/Api';
import {
  FormBody,
  FormScope,
  InputText,
  SubmitButton,
} from '../../../components/Form';
import Header from '../../../components/Header';
import { Container } from '../../../styles/Container';

export default function UpdateGame(props) {
  const id = props.match.params.id;
  const [game, setGame] = useState('');

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readGameByIdUrl(id),
        true
      );
      const result = await response.json();
      setGame(result);
    };
    loadGame();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const cover = e.target.cover.value;
    const description = e.target.description.value;
    const launchYear = e.target.launchYear.value;
    const imdbRating = +e.target.imdbRating.value;
    const youtubeUrl = e.target.youtubeUrl.value;
    const gamePlayUrl = e.target.gamePlayUrl.value;
    // const genresIds = e.target.genres.value;
    // const profilesIds = e.target.profiles.value;

    const payload = {
      title,
      cover,
      description,
      launchYear,
      imdbRating,
      youtubeUrl,
      gamePlayUrl,
      // genresIds,
      // profilesIds,
    };
    try {
      const response = await Api.buildApiPatchRequest(
        Api.updateGameUrl(id),
        payload,
        true
      );
      if (!response) {
        throw new Error(`Something went wrong: ${response.status}`);
      }

      const body = await response.json();

      if (response.status === 200) {
        const id = body.id;
        props.history.push('/games/details/' + id);
      } else {
        console.log(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <FormScope>
          <FormBody>
            <form onSubmit={handleSubmit}>
              <Link to='/' className='text-white hover:underline'>
                Back Home
              </Link>
              <h1 className='text-white text-3xl mb-3'>
                Update - {game.title}
              </h1>
              <InputText
                type='text'
                id='title'
                defaultValue={game.title}
                placeholder='Game name'
              />
              <InputText
                type='text'
                id='cover'
                defaultValue={game.cover}
                placeholder='Game cover'
              />
              <InputText
                type='text'
                id='description'
                defaultValue={game.description}
                placeholder='Game description'
              />
              <InputText
                type='text'
                id='launchYear'
                defaultValue={game.launchYear}
                placeholder='Launch year'
              />
              <InputText
                type='number'
                id='imdbRating'
                defaultValue={game.imdbRating}
                placeholder='Imdb Rating'
                min='0'
                max='10'
                step='0.1'
              />
              <InputText
                type='text'
                id='youtubeUrl'
                defaultValue={game.youtubeUrl}
                placeholder='Youtube URL'
              />
              <InputText
                type='text'
                id='gamePlayUrl'
                defaultValue={game.gamePlayUrl}
                placeholder='Game Play URL'
              />
              <SubmitButton type='submit'>Save</SubmitButton>
            </form>
          </FormBody>
        </FormScope>
      </Container>
    </div>
  );
}
