import React from 'react';
import styled from 'styled-components';

// CSS Styled Components:

const PlayButtonWrapper = styled.div`
  display: flex;
  margin-top: 16%;
  margin-left: 16%;
`;

const Play = styled.div`
  cursor: pointer;
  color: #ff3300;
  font-size: 48px;
  align-self: center;
`;

const Pause = styled.div`
  cursor: pointer;
  color: #ff3300;
`;

// React Component:

const PlayButton = props => (
  <PlayButtonWrapper>
    {
      !props.playing ? (
        <Play onClick={props.handlePlayClick}><ion-icon name="play-circle" /></Play>
        ) : (
          <Pause onClick={props.handlePauseClick}><i className="material-icons md-48">pause_circle_filled</i></Pause>
        )
    }
  </PlayButtonWrapper>
);

export default PlayButton;
