import React, { useState } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';

import { IInputsState } from './Form';
import Form from './Form';
import List from './List';

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
  const [infoList, setInfoList] = useState<AxiosResponse<any> | null>(null);

  const fetchData = async(username: string) => {
    const { data } = await axios(`https://api.github.com/users/${username}`);
    console.log('result', data);

    setInfoList(data);
  }

  const submit = (data: IInputsState) => {
    console.log(data);
    fetchData(data.username);
  }

  return (
    <Root>
      <Header>Parsing git info</Header>
      <Form submit={submit} />
      <List list={infoList} />
    </Root>
  );
}

export default App;