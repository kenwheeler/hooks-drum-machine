import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { bufferResource } from './bufferResource';

const Button = styled.button`
  background: ${props => (props.held ? '#fd7272' : 'none')};
  flex: 1;
  border: 2px solid #fd7272;
  color: ${props => (props.held ? 'black' : '#fd7272')};
  display: inline-block;
  font-size: 24px;
  border-radius: 2;
  padding: 20px;
  font-family: 'Righteous', cursive;
  margin: 2px;
  &:active {
    background: #fd7272;
    color: black;
  }
`;

export default function FX({ sound, title }) {
  let [held, setHeld] = useState(false);
  let buffer = bufferResource.read(sound);
  buffer.volume.value = -8;

  function playSound(e) {
    if (held) {
      setHeld(false);
      buffer.stop();
    } else {
      if (e.shiftKey) {
        buffer.loop = true;
        setHeld(true);
      }
      buffer.start();
    }
  }
  function stopSound() {
    if (!held) {
      buffer.stop();
    }
  }
  return (
    <Button
      held={held}
      onMouseDown={playSound}
      onTouchStart={playSound}
      onTouchEnd={stopSound}
      onMouseUp={stopSound}
    >
      {title}
    </Button>
  );
}
