import React from 'react';
import axios from 'axios';
import css from '../../../public/styles.css';
import RelatedTrackEntry from './RelatedTrackEntry';

class RelatedTrackList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSongId: '',
      relatedTracksIds: [],
      relatedTracksObjs: [],
      songPlaying: false,
    };

    this.getTracksById = this.getTracksById.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.monitorPlay = this.monitorPlay.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    this.getTracksById(id);
  }

  getTracksById(id) {
    axios.get(`/api/songs/${id}`)
      .then((response) => {
        console.log('response: ', response);

        this.setState({
          currentSongId: (response.data[0].id).toString(),
          relatedTracksIds: response.data[0].relatedTracks,
          relatedTracksObjs: [],
        });
      })
      .then(() => {
        this.state.relatedTracksIds.forEach((id) => {
          axios.get(`/api/songs/${id.toString()}`)
            .then((response) => {
              this.setState({
                relatedTracksObjs: this.state.relatedTracksObjs.concat(response.data),
              });
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  monitorPlay() {
    this.setState({
      songPlaying: !this.state.songPlaying,
    });
  }

  handleTitleClick(title) {
    let id;

    for (let i = 0; i < 3; i++) {
      if (title === this.state.relatedTracksObjs[i].title) {
        id = this.state.relatedTracksObjs[i].id;
        break;
      }
    }

    this.getTracksById(id);
  }

  render() {
    return (
      <div className="list">
        {
          this.state.relatedTracksObjs.map(track => (
            <RelatedTrackEntry key={track.id} track={track} clickTrack={this.handleTitleClick} songPlaying={this.state.songPlaying} monitorPlay={this.monitorPlay} />
          ))
        }
      </div>
    );
  }
}

export default RelatedTrackList;
