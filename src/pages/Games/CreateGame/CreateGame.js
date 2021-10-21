import React, { useState } from 'react';
import { Api } from '../../../api/Api';
import {
  FormBody,
  FormScope,
  InputText,
  SubmitButton,
} from '../../../components/Form';
import Header from '../../../components/Header';
import { Container } from '../../../styles/Container';

export default function CreateGame(props) {
  const [fields, setFields] = useState('');

  const handleChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.id] =
      e.target.id === 'imdbRating' ? parseInt(e.target.value) : e.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...fields };
    const response = await Api.buildApiPostRequest(
      Api.createGameUrl(),
      payload,
      true
    );
    const body = await response.json();
    if (response.status === 201) {
      const id = body.id;
      props.history.push('/games/detail' + id);
    }
  };
  console.log(fields.title);

  return (
    <div>
      <Header />
      <Container>
        <FormScope>
          <FormBody>
            <form onSubmit={handleSubmit}>
              <h1>Crate new game</h1>
              <InputText
                type='text'
                id='title'
                placeholder='Game name'
                onBlur={handleChange}
              />
              <InputText
                type='text'
                id='cover'
                placeholder='Game cover'
                onBlur={handleChange}
              />
              <InputText
                type='text'
                id='description'
                placeholder='Game description'
                onBlur={handleChange}
              />
              <InputText
                type='text'
                id='lauchYear'
                placeholder='Launch year'
                onBlur={handleChange}
              />
              <InputText
                type='number'
                id='imdbRating'
                placeholder='Imdb Rating'
                min='0'
                max='10'
                step='0.1'
                onBlur={handleChange}
              />
              <InputText
                type='text'
                id='youtubeUrl'
                placeholder='Youtube URL'
                onBlur={handleChange}
              />
              <InputText
                type='text'
                id='gamePlayUrl'
                placeholder='Game Play URL'
                onBlur={handleChange}
              />
              <SubmitButton type='submit'>Save</SubmitButton>
            </form>
          </FormBody>
        </FormScope>
      </Container>
    </div>
  );
}
