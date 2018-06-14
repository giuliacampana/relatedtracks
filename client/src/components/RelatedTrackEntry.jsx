import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import HoverButtons from './HoverButtons';
import PlayButton from './PlayButton';

// CSS Styled Components:

const TrackWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  width: 370px;
`;

const AlbumCover = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  order: 0;
`;

const SongInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 0px;
`;

const Artist = styled.div`
  width: inherit;
  font-size: 18px;
  color: #adadad;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  width: inherit;
  font-size: 18px;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`;

const BlackTitle = styled.span`
  color: black;
  z-index: 0;
`;

const OrangeTitle = styled.span`
  color: #ff3300;
  z-index: 0;
`;

const Counts = styled.div`
  font-size: 14px;
  color: #adadad;
  font-size: 14px;
  display: flex;
  width: inherit;
`;

const Plays = styled.div`
  padding-right: 15px;
`;

const PlayCount = styled.span`
  padding-left: 2px;
`;

const Likes = styled.div`
  padding-right: 15px;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const LikeCount = styled.span`
  padding-left: 2px;
`;

const Reposts = styled.div` 
  padding-right: 15px;
`;

const RepostCount = styled.span`
  padding-left: 2px;
`;

const Comments = styled.div`
  padding-right: 15px;
`;

const CommentCount = styled.span`
  padding-left: 2px;
`;

// React Component:

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
    axios.post(`/api/songs/${this.state.id}/plays`, {
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
    axios.post(`/api/songs/${this.state.id}/likes`, {
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
      titleClass = 'related-track-entry-title static';
    } else {
      titleClass = 'related-track-entry-title playing';
    }

    return (
      <TrackWrapper className="related-track-entry" onMouseEnter={this.onHover} onMouseLeave={this.enableMouseLeave}>
        <AlbumCover className="box-placeholder">
          {
            this.state.showHoverButtons ? (
              <PlayButton playing={this.state.playing} handlePlayClick={this.handlePlayClick} handlePauseClick={this.handlePauseClick} />
            ) : (
              null
            )
          }
        </AlbumCover>
        <SongInfoWrapper className="media-body">
          <Artist className="related-track-entry-artist">{this.state.artist}</Artist>
          <TitleWrapper className="related-track-entry-title" onClick={this.clickRelatedTrack}>
            {
              !this.state.playing ? (
                <BlackTitle className="static-title">{this.state.title}</BlackTitle>
              ) : (
                <OrangeTitle className="playing-title">{this.state.title}</OrangeTitle>
              )
            }
            {
              this.state.showHoverButtons ? (
                <HoverButtons likes={this.state.likes} liked={this.state.liked} showHoverButtons={this.state.showHoverButtons} showDropdown={this.state.showDropdown} handleLikeClick={this.handleLikeClick} />
              ) : (
                null
              )
            }
          </TitleWrapper>
          <Counts className="related-track-entry-counts">
            <Plays className="plays">
              <ion-icon name="play" />
              <PlayCount className="play-count">{this.state.plays}</PlayCount>
            </Plays>
            <Likes className="likes" onClick={this.handleLikeClick}>
              <ion-icon name="heart" />
              <LikeCount className="like-count">{this.state.likes}</LikeCount>
            </Likes>
            <Reposts className="reposts">
              <ion-icon name="repeat" />
              <RepostCount className="repost-count">{this.state.reposts}</RepostCount>
            </Reposts>
            <Comments className="comments">
              <ion-icon name="chatbubbles" />
              <CommentCount className="comment-count">{this.state.comments}</CommentCount>
            </Comments>
          </Counts>
        </SongInfoWrapper>
      </TrackWrapper>
    );
  }
}

export default RelatedTrackEntry;
