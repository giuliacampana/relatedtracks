import React from 'react';
import axios from 'axios';
import css from '../../../public/styles.css';
import RelatedTrackList from './RelatedTrackList';

const App = () => (
  <div className="app">
    <table className="headers">
      <tr>
        <td>
          <i className="material-icons">graphic_eq</i>
          <span className="title">Related Tracks</span>
        </td>
        <td className="view-all">View all</td>
      </tr>
    </table>
    <div className="line" />
    <RelatedTrackList />
  </div>
);

export default App;
