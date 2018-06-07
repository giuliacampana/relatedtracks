import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RelatedTrackEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plays: 36,
    };

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick(event) {
    event.preventDefault();
    this.setState({
      plays: this.state.plays + 1,
    });
  }

  render() {
    return (
      <div className="related-track-entry">
        <div className="media-left media-middle">
          <img className="album-cover" />
        </div>
        <div className="media-body">
          <div className="related-track-entry-artist">{this.props.artist}</div>
          <div className="related-track-entry-title">{this.props.title}</div>
          <div className="related-track-entry-counts">
            <div className="plays" onClick={this.handlePlayClick}>{this.props.plays}</div>
            <div className="likes">{this.props.likes}</div>
            <div className="reposts">{this.props.reposts}</div>
            <div className="comments">{this.props.comments}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedTrackEntry;

// https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg
