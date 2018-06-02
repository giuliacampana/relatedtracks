// import css from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getRequest = this.getRequest.bind(this);
  }

  componentDidMount() {
    this.getRequest();
  }

  getRequest() {
    console.log(this);
    console.log('tried');
    // event.preventDefault();

    // axios.get('/songs', {
    //   params: {
    //     id: 5,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios.get('/songs/5')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>Hey</div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
