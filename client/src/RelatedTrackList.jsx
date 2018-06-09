import React from 'react';
import axios from 'axios';
import css from '../../public/styles.css';
import RelatedTrackEntry from './RelatedTrackEntry';

class RelatedTrackList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSongId: '1',
      relatedTracksIds: [64, 15, 57],
      relatedTracksObjs: [],
    };

    this.getTracksById = this.getTracksById.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getTracksById(this.state.currentSongId);
  }

  getTracksById(id) {
    axios.get(`/songs/${id}`)
      .then((response) => {
        this.setState({
          currentSongId: (response.data[0].id).toString(),
          relatedTracksIds: response.data[0].relatedTracks,
          relatedTracksObjs: [],
        });
      })
      .then(() => {
        this.state.relatedTracksIds.forEach((id) => {
          axios.get(`/songs/${id.toString()}`)
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

  handleClick(title) {
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
      <div>
        {
          this.state.relatedTracksObjs.map(track => (
            <RelatedTrackEntry track={track} clickTrack={this.handleClick} />
          ))
        }
      </div>
    );
  }
}

export default RelatedTrackList;
