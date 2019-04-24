import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.form`
  max-width: 600px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const Input = styled.input`
  height: 20px;
  font-size: 15px;
  outline: none;
  margin-top: 5px;
  padding: 0;
`;

const Submit = styled.input`
  width: 100%;
  height: 20px;
  font-size: 16px;
  outline: none;
  padding: 0;
`;

interface FormProps {
  submit: (data: IInputsState) => void;
  className?: string;
}

export interface IInputsState {
  username: string;
}

const Form: React.FC<FormProps> = ({ submit }) => {
  const [inputsState, setInputsState] = useState<IInputsState>({
    username: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputsState({
      ...inputsState,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    submit(inputsState);
  }

  return (
    <Root onSubmit={handleSubmit}>
      <Container>
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          name="username"
          value={inputsState.username}
          placeholder="Provide github username"
          onChange={handleChange} 
        />
      </Container>

      <Submit type="submit" value="Get info" />
    </Root>
  );
};

export default Form;