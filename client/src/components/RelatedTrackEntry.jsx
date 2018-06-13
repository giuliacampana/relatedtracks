import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import HoverButtons from './HoverButtons';
import PlayButton from './PlayButton';

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
      liked: false,
      playing: false,
      showHoverButtons: false,
      showDropdown: false,
    };

    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
    this.enableMouseLeave = this.enableMouseLeave.bind(this);
    this.clickRelatedTrack = this.clickRelatedTrack.bind(this);
    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.updateLikeCount = this.updateLikeCount.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  onHover() {
    this.setState({
      showHoverButtons: true,
    });
  }

  onHoverLeave() {
    if (!this.state.playing) {
      this.setState({
        showHoverButtons: false,
      });
    }
    if (this.state.playing) {
      this.setState({
        showHoverButtons: true,
      });
    }
    if (this.state.showDropdown) {
      this.setState({
        showHoverButtons: true,
      });
    }
  }

  enableMouseLeave() {
    if (!this.state.showDropdown) {
      this.onHoverLeave();
    } else {
      null;
    }
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

    if (!this.props.songPlaying) {
      this.props.monitorPlay();

      this.setState({
        playing: true,
        showHoverButtons: true,
        showDropdown: false,
      });
  
      this.updatePlayCount(event);

    } else {
      null;
    }
  }

  handlePauseClick(event) {
    event.preventDefault();

    this.props.monitorPlay();

    this.setState({
      playing: false,
    });
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
    if (!this.state.liked) {
      this.updateLikeCount(event);
      this.setState({
        liked: true,
      });
    }
  }

  render() {
    let titleClass;
    if (!this.state.playing) {
      titleClass = "related-track-entry-title static";
    } else {
      titleClass = "related-track-entry-title playing";
    }
    
    return (
      <div className="related-track-entry" onMouseEnter={this.onHover} onMouseLeave={this.enableMouseLeave}>
        <div className="media-left media-middle">
          <div className="box-placeholder">
            {
              this.state.showHoverButtons ? (
                <PlayButton playing={this.state.playing} handlePlayClick={this.handlePlayClick} handlePauseClick={this.handlePauseClick} />
              ) : (
                null
              )
            }
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
        {
          this.state.showHoverButtons ? (
            <HoverButtons likes={this.state.likes} liked={this.state.liked} showHoverButtons={this.state.showHoverButtons} showDropdown={this.state.showDropdown} handleLikeClick={this.handleLikeClick} />
          ) : (
            null
          )
        }
      </div>
    );
  }
}

export default RelatedTrackEntry;
