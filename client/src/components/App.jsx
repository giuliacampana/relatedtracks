import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import css from '../../../public/styles.css';
import RelatedTrackList from './RelatedTrackList';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

const App = () => (
  <div className="app">
    <table className="headers">
      <tbody>
        <tr>
          <td>
            <i className="material-icons">graphic_eq</i>
            <span className="title">Related tracks</span>
          </td>
          <td className="view-all">View all</td>
        </tr>
      </tbody>
    </table>
    <div className="line" />
    <RelatedTrackList />
  </div>
);

export default App;
