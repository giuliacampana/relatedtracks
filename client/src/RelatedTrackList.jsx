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
  }

  componentDidMount() {
    this.getTracksById();
  }

  getTracksById() {
    axios.get(`/songs/${this.state.currentSongId}`)
      .then((response) => {
        this.setState({
          currentSongId: (response.data[0].id).toString(),
          relatedTracksIds: response.data[0].relatedTracks,
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

  render() {
    return (
      <div>
        {
          this.state.relatedTracksObjs.map(track => (
            <RelatedTrackEntry track={track} />
          ))
        }
      </div>
    );
  }
}

export default RelatedTrackList;
