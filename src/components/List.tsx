import React from 'react';
import styled from 'styled-components';
import { AxiosResponse } from 'axios';


const Root = styled.div`
  margin-top: 100px;
  max-width: 800px;
  width: 100%;
`;

const Item = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`

const Key = styled.p``;
const Value = styled.p``;

type ListProps = {
  list: ExtendedAxiosResponse | null;
};

interface ExtendedAxiosResponse extends AxiosResponse {
  [index: string]: any;
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <Root>
      {list && Object.keys(list).map((key: string) => (
          <Item>
            <Key>{key}</Key>
            <Value>{list[key]}</Value>
          </Item>
        ))}
    </Root>
  );
}

export default List;
