// import css from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: '5',
      relatedTracks: [29, 52, 4],
    };
    this.getRequest = this.getRequest.bind(this);
  }

  componentDidMount() {
    this.getRequest();
  }

  getRequest() {
    console.log('to get rid of red lines', this);

    axios.get(`/songs/${this.state.song}`)
      .then((response) => {
        console.log(response.data);
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
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
