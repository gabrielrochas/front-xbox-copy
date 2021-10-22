import React, { useState } from "react";
import { Api } from "../../../api/Api";
import {
  FormBody,
  FormScope,
  InputText,
  SubmitButton,
} from "../../../components/Form";
import Header from "../../../components/Header";
import { Container } from "../../../styles/Container";

export const CreateUser = (props) => {
    const [fields, setFields] = useState("");

    const handleChange = (e) => {
      const auxFields = { ...fields };
      auxFields[e.target.id] = e.target.value;
      setFields(auxFields);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = { ...fields };
      const response = await Api.buildApiPostRequest(
        Api.createUserUrl(),
        payload,
        true
      );
      
      if (response.status === 201) {
        props.history.push("/login");
      }
    };

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
                  id='name'
                  placeholder='Name'
                  onBlur={handleChange}
                />
                <InputText
                  type='text'
                  id='lastname'
                  placeholder='Last name'
                  onBlur={handleChange}
                />
                <InputText
                  type='text'
                  id='email'
                  placeholder='Email address'
                  onBlur={handleChange}
                />
                <InputText
                  type='password'
                  id='password'
                  placeholder='Password'
                  onBlur={handleChange}
                />
                <InputText
                  type='text'
                  id='cpf'
                  placeholder='CPF'
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
