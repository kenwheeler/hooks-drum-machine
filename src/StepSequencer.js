import React from 'react';
import styled from 'styled-components';
import { bufferResource } from './bufferResource';

import Track from './Track';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid #555;
  margin: 0px 20px 20px;
  position: relative;
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  width: 600px;
  top: 0px;
  right: 0px;
  height: 100%;
  padding: 4px 2px;
  pointer-events: none;
`;

const StepIndicator = styled.div`
  position: absolute;
  top: 0px;
  left: ${props => props.step * 37.5}px;
  width: 38px;
  height: 100%;
  background: #00ff0020;
`;

export default function StepSequencer({
  config,
  playing,
  currentStep,
  setBuffers,
}) {
  return (
    <Wrapper>
      <IndicatorWrapper>
        {playing && <StepIndicator step={currentStep} />}
      </IndicatorWrapper>
      {config.tracks.map(t => (
        <Track
          name={t}
          key={t}
          buffer={bufferResource.read(config.samples[t])}
          setBuffers={setBuffers}
        />
      ))}
    </Wrapper>
  );
}
