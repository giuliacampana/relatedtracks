import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RelatedTrackEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: (this.props.track.id).toString(),
      artist: this.props.track.artist,
      title: this.props.track.title,
      plays: this.props.track.plays,
      likes: this.props.track.likes,
      reposts: this.props.track.reposts,
      comments: this.props.track.comments,
      relatedTracks: this.props.track.relatedTracks,
    };

    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.updateLikeCount = this.updateLikeCount.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  updatePlayCount() {
    axios.post(`/songs/${this.state.id}/plays`, {
      plays: this.state.plays,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          plays: this.state.plays + 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePlayClick(event) {
    event.preventDefault();
    this.updatePlayCount();
  }

  updateLikeCount() {
    axios.post(`/songs/${this.state.id}/likes`, {
      likes: this.state.likes,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          likes: this.state.likes + 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleLikeClick(event) {
    event.preventDefault();
    this.updateLikeCount();
  }

  render() {
    return (
      <div className="related-track-entry">
        <div className="media-left media-middle">
          <img className="album-cover" />
        </div>
        <div className="media-body">
          <div className="related-track-entry-artist">{this.state.artist}</div>
          <div className="related-track-entry-title">{this.state.title}</div>
          <div className="related-track-entry-counts">
            <div className="plays" onClick={this.handlePlayClick}>{this.state.plays}</div>
            <div className="likes" onClick={this.handleLikeClick}>{this.state.likes}</div>
            <div className="reposts">{this.state.reposts}</div>
            <div className="comments">{this.state.comments}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedTrackEntry;

// https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg
