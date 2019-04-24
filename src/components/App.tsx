import React from 'react';
import styled from 'styled-components';

import { IInputsState } from './Form';
import Form from './Form';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Header = styled.h1`
  margin-bottom: 50px;
`;

const App: React.FC = () => {
  const submit = (data: IInputsState) => {
    console.log(data);
  }

  return (
    <Root>
      <Header>Parsing git info</Header>
      <Form submit={submit} />
    </Root>
  );
}

export default App;