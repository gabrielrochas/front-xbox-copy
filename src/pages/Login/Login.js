import React, { useState } from 'react';
import { Api } from '../../api/Api';
import { Container } from '../../styles/Container';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

const FormScope = tw.div`
  w-full
  h-screen
  flex
  items-center
  justify-center
`;

const FormBody = tw.div`
  bg-primary
  w-96
  h-auto
  pt-8
  pb-8
  px-8
  flex
  flex-col
  items-center
  transform
`;

export default function Login(props) {
  const [fields, setFields] = useState('');

  const handleChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.id] = e.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...fields,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);
    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;
      localStorage.setItem('JWT', accessToken);
      props.history.push(`/`);
    }
  };
  return (
    <Container>
      <FormScope>
        <FormBody>
          <h1 className='text-white'>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='email'
              className='w-full h-12 px-4 text-lg focus:ring-theme-bg mb-4 transform -skew-x-6'
              placeholder='Email'
              onChange={handleChange}
            />
            <input
              type='password'
              id='password'
              className='w-full h-12 px-4 text-lg focus:ring-theme-bg mb-4 transform -skew-x-6'
              placeholder='Password'
              onChange={handleChange}
            />
            <button
              type='submit'
              className='bg-theme-bg w-full h-12 px-4 text-lg text-white  mb-4 transform -skew-x-6'
            >
              Login
            </button>
          </form>
          <Link to='/'>Back home</Link>
        </FormBody>
      </FormScope>
    </Container>
  );
}
