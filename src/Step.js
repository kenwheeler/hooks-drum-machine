import React, { useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';

import StepContext from './StepContext';

const flash = keyframes`
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5
  }
`;

const flashMixin = css`
  animation: ${flash} 0.5s linear infinite;
`;

const StepButton = styled.button`
  flex: 1;
  background: ${props => (props.offsetColor ? '#25CCF7' : '#FD7272')};
  opacity: ${props => (props.on ? 1 : 0.35)};
  border-radius: 2;
  margin: 2px;
  ${props => props.doubled && flashMixin}
`;

const isOffsetColor = index =>
  (index > 3 && index < 8) || (index > 11 && index < 16);

export default React.memo(function Step({ on, index, name, doubled }) {
  const context = useContext(StepContext);
  function toggleStep(e) {
    let shiftEnabled = e.shiftKey === true;
    context.setSteps(state => {
      let steps = [...state[name]];
      let val =
        steps[index] === 0
          ? shiftEnabled
            ? 2
            : 1
          : shiftEnabled && steps[index] === 1
          ? 2
          : 0;
      steps[index] = val;
      return {
        ...state,
        [name]: steps,
      };
    });
  }
  return (
    <StepButton
      on={on}
      offsetColor={isOffsetColor(index)}
      doubled={doubled}
      onClick={toggleStep}
    />
  );
});
