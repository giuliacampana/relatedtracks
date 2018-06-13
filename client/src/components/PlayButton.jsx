import React from 'react';
import axios from 'axios';

const PlayButton = (props) => (
  <div>
    {
      !props.playing ? (
        <i className="material-icons md-48 play" onClick={props.handlePlayClick}>play_circle_filled</i>
        ) : (
        <i className="material-icons md-48 pause" onClick={props.handlePauseClick}>pause_circle_filled</i>
        )
    }
  </div>
);

export default PlayButton;
