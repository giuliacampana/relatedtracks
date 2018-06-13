import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// CSS Styled Components:

const PlayButtonWrapper = styled.div`
  display: flex;
`;

const Play = styled.div`
  cursor: pointer;
  color: #ff3300;
  align-self: center;
`;

const Pause = styled.div`
  cursor: pointer;
  color: #ff3300;
  align-self: center;
`;

// React Component:

const PlayButton = props => (
  <PlayButtonWrapper>
    {
      !props.playing ? (
        <Play><i className="material-icons md-48 play" onClick={props.handlePlayClick}>play_circle_filled</i></Play>
        ) : (
          <Pause> <i className="material-icons md-48 pause" onClick={props.handlePauseClick}>pause_circle_filled</i></Pause>
        )
    }
  </PlayButtonWrapper>
);

export default PlayButton;
