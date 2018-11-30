import React, { useEffect } from 'react';
import styled from 'styled-components';

import Steps from './Steps';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Info = styled.div`
  flex: 0 0 155px;
  background: linear-gradient(#292929, #111);
  border: 1px solid #555;
`;

const Name = styled.h2`
  color: white;
  font-size: 14px;
  margin-left: 20px;
  line-height: 100%;
  margin: 0;
  vertical-align: middle;
  padding: 0px 10px;
  line-height: 50px;
`;

export default function Track({ buffer, name, setBuffers }) {
  useEffect(
    () => {
      setBuffers(buffers => ({
        ...buffers,
        [name]: buffer,
      }));
    },
    [buffer]
  );
  return (
    <Wrapper>
      <Info>
        <Name>{name}</Name>
      </Info>
      <Steps name={name} />
    </Wrapper>
  );
}
