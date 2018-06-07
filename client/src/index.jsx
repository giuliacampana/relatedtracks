import css from '../../public/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedTrackEntry from './RelatedTrackEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '1',
      artist: 'fermentum justo nec',
      title: 'vel dapibus at',
      plays: 519,
      likes: 256,
      reposts: 137,
      comments: 13,
      relatedTracks: [64, 15, 57],
    };
    this.getSongById = this.getSongById.bind(this);
  }

  componentDidMount() {
    this.getSongById();
  }

  getSongById() {
    axios.get(`/songs/${this.state.id}`)
      .then((response) => {
        console.log('response', response);
        this.setState({
          id: (response.data[0].id).toString(),
          artist: response.data[0].artist,
          title: response.data[0].title,
          plays: response.data[0].plays,
          likes: response.data[0].likes,
          reposts: response.data[0].reposts,
          comments: response.data[0].comments,
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
          <RelatedTrackEntry id={this.state.id} artist={this.state.artist} title={this.state.title} plays={this.state.plays} likes={this.state.likes} reposts={this.state.reposts} comments={this.state.comments} relatedTracks={this.state.relatedTracks} />
        ))}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
