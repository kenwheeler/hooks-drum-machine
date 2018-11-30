import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: space-between;
`;

export default function StepSequencer(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
