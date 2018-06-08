import React from 'react';
import axios from 'axios';
import css from '../../public/styles.css';
import RelatedTrackList from './RelatedTrackList';

const App = () => (
  <div>
    <h3>Related Tracks</h3>
    <RelatedTrackList />
  </div>
);

export default App;
