import React from 'react';
import styled from 'styled-components';
import playButton from '../../../public/play-button.png';
import pauseButton from '../../../public/pause-button.png';

// CSS Styled Components:

const PlayButtonWrapper = styled.div`
  display: flex;
  margin-top: 16%;
  margin-left: 16%;
  background: none;
`;

const Button = styled.img`
  cursor: pointer;
  align-self: center;
  width: 48px;
  height: 48px;
`;

// React Component:

const PlayButton = props => (
  <PlayButtonWrapper>
    {
      !props.playing ? (
        <Button onClick={props.handlePlayClick} src={playButton} />
        ) : (
          <Button onClick={props.handlePauseClick} src={pauseButton} />
        )
    }
  </PlayButtonWrapper>
);

export default PlayButton;

