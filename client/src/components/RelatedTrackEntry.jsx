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
      playing: false,
      showDropdown: false,
    };

    this.clickRelatedTrack = this.clickRelatedTrack.bind(this);
    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.updateLikeCount = this.updateLikeCount.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
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
    this.setState({
      playing: !this.state.playing,
    });
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

  handleDropdownClick(event) {
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  }

  render() {
    let titleClass;
    let button;
    if (!this.state.playing) {
      titleClass = "related-track-entry-title static";
      button = "play_circle_filled";
    } else {
      titleClass = "related-track-entry-title playing"; 
      button = "pause_circle_filled";
    }
    
    return (
      <div className="related-track-entry">
        <div className="media-left media-middle">
          <div className="box-placeholder">
            <i className="material-icons md-48" onClick={this.handlePlayClick}>{button}</i>
          </div>
        </div>
        <div className="media-body">
          <div className="related-track-entry-artist">{this.state.artist}</div>
          <div className={titleClass} onClick={this.clickRelatedTrack}>
            <span className="title">{this.state.title}</span>
          </div>
          <div className="related-track-entry-counts">
            <div className="plays">
              <ion-icon name="play" />
              <span className="play-count">{this.state.plays}</span>
            </div>
            <div className="likes" onClick={this.handleLikeClick}>
              <ion-icon name="heart" />
              <span className="like-count">{this.state.likes}</span>
            </div>
            <div className="reposts">
              <ion-icon name="repeat" />
              <span className="repost-count">{this.state.reposts}</span>
            </div>
            <div className="comments">
              <ion-icon name="chatbubbles" />
              <span className="comment-count">{this.state.comments}</span>
            </div>
          </div>
        </div>
        <div className="media-right">
            <span className="like-button" onClick={this.handleLikeClick}><ion-icon name="heart" /></span>
            <span className="dot-dot-dot">
              <i className="material-icons md-24" onClick={this.handleDropdownClick}>more_horiz</i>
              { this.state.showDropdown ? (
                <div className="dropdown-content">
                  <div className="dropdown-repost">
                    <ion-icon name="repeat" className="dropdown-icon" />
                    <span>Repost</span>
                  </div>
                  <div className="dropdown-share">
                    <ion-icon name="open" className="dropdown-icon" />
                    <span>Share</span>
                  </div>
                  <div className="dropdown-next">
                    <i className="material-icons">playlist_play</i>
                    <span>Add to Next up</span>
                  </div>
                  <div className="dropdown-playlist">
                    <i className="material-icons">playlist_add</i>
                    <span>Add to playlist</span>
                  </div>
                  <div className="dropdown-station">
                    <ion-icon name="radio"></ion-icon>
                    <span>Station</span>
                  </div>
                </div>
            ) : (
                  null
              )
            }
          </span>
        </div>
      </div>
    );
  }
}

export default RelatedTrackEntry;
