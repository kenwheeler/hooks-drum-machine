import React, { useState } from 'react';
import styled from 'styled-components';

const Start = styled.button`
  color: ${props => (props.on === false ? '#25CCF7' : '#FD7272')};
  border: 2px solid ${props => (props.on === false ? '#25CCF7' : '#FD7272')};
  background: none;
  font-family: 'Righteous', cursive;
  padding: 10px;
  font-size: 18px;
  border-radius: 2;
  margin: 2px 4px;
  margin-right: 20px;
  align-self: center;
  min-width: 100px;
`;

export default function useStart() {
  const [on, set] = useState(false);
  const togglePlay = () => set(!on);
  return [
    on,
    <Start on={on} onClick={togglePlay}>
      {on ? 'Stop' : 'Play'}
    </Start>,
  ];
}
