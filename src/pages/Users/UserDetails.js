import React, { useEffect, useState } from 'react';
import { Api } from '../../api/Api';
import Header from '../../components/Header';
import { Container } from '../../styles/Container';

export default function UserDetails(props) {
  const id = props.match.params.id;
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readUserByIdUrl(id),
        true
      );
      const result = await response.json();
      setUser(result);
    };
    loadUser();
  }, [id]);
  console.log(user);
  return (
    <div>
      <Header />
      <Container>
        <h1 className='text-white'>UserDetails</h1>
      </Container>
    </div>
  );
}
