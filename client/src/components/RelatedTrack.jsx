import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedTrackList from './RelatedTrackList';

// CSS Styled Components:

const RelatedTracks = styled.div`
  font-family: 'PT Sans', sans-serif;
`;

const Headers = styled.table`
  font-size: 18px;
  color: #b7b7b7;
`;

const Title = styled.span`
  padding-left: 8px;
`;

const ViewAll = styled.td`
  width: 215px;
  text-align: right;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Line = styled.div`
  display: block;
  width: 370px;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 0;
  padding: 0;
`;

// React Component:

const RelatedTrack = () => (
  <RelatedTracks className="related-track">
    <Headers className="headers">
      <tbody>
        <tr>
          <td>
            <i className="material-icons">graphic_eq</i>
            <Title className="title">Related tracks</Title>
          </td>
          <ViewAll className="view-all">View all</ViewAll>
        </tr>
      </tbody>
    </Headers>
    <Line className="line" />
    <RelatedTrackList />
  </RelatedTracks>
);

export default RelatedTrack;
