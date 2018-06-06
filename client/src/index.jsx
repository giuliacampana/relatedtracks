import css from '../../public/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedTrackEntry from './RelatedTrackEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: '5',
      relatedTracks: [29, 52, 4],
    };
    this.getSongById = this.getSongById.bind(this);
  }

  componentDidMount() {
    this.getSongById();
  }

  getSongById() {
    console.log('to get rid of red lines', this);

    axios.get(`/songs/${this.state.song}`)
      .then((response) => {
        console.log('response', response.data);
        this.setState({
          song: (response.data[0].id).toString(),
          relatedTracks: response.data[0].relatedTracks,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Related Tracks</h3>
        {this.state.relatedTracks.map(id => (
          <RelatedTrackEntry songID={id} />
        ))}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
