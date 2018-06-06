import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RelatedTrackEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="related-track-entry">
        <div className="media-left media-middle">
          <img className="album-cover" />
        </div>
        <div className="media-body">
          <div className="related-track-entry-artist">Artist Name</div>
          <div className="related-track-entry-title">SONG TITLE</div>
        </div>
      </div>
    );
  }
}
export default RelatedTrackEntry;
