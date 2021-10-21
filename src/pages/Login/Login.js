import React, { useState } from 'react';
import { Api } from '../../api/Api';
import { JwtHandler } from '../../jwt-handler/JwtHandler';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/Container';
import {
  FormScope,
  FormBody,
  InputText,
  SubmitButton,
} from '../../components/Form';

export default function Login(props) {
  const [fields, setFields] = useState('');

  // Get fields values
  const handleChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.id] = e.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set fields values to payload
    const payload = {
      ...fields,
    };
    // It does a request to the backend
    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);
    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;
      JwtHandler.setJwt(accessToken);
      props.history.push(`/`);
    }
  };
  return (
    <Container>
      <FormScope>
        <FormBody inputwidth='24rem'>
          <h1 className='text-white'>Login</h1>
          <form onSubmit={handleSubmit}>
            <InputText
              type='text'
              id='email'
              placeholder='Email'
              onChange={handleChange}
            />
            <InputText
              type='password'
              id='password'
              placeholder='Password'
              onChange={handleChange}
            />
            <SubmitButton type='submit'>Login</SubmitButton>
          </form>
          <Link to='/'>Back home</Link>
        </FormBody>
      </FormScope>
    </Container>
  );
}
