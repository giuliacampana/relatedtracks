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

    this.clickRelatedTrack = this.clickRelatedTrack.bind(this);
    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.updateLikeCount = this.updateLikeCount.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  clickRelatedTrack(event) {
    const title = event.target.innerHTML;
    this.props.clickTrack(title);
  }

  updatePlayCount() {
    axios.post(`/songs/${this.state.id}/plays`, {
      plays: this.state.plays,
    })
      .then((response) => {
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
    this.updatePlayCount(event);
  }

  updateLikeCount() {
    axios.post(`/songs/${this.state.id}/likes`, {
      likes: this.state.likes,
    })
      .then((response) => {
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
    this.updateLikeCount(event);
  }

  render() {
    return (
      <div className="related-track-entry">
        <div className="media-left media-middle">
          <img className="album-cover" />
        </div>
        <div className="media-body">
          <div className="related-track-entry-artist">{this.state.artist}</div>
          <div className="related-track-entry-title" onClick={this.clickRelatedTrack}>{this.state.title}</div>
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
