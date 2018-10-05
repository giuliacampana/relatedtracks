import React from 'react';
import styled from 'styled-components';
import RelatedTrackList from './RelatedTrackList';

// CSS Styled Components:

const RelatedTracks = styled.div`
  font-family: 'PT Sans', sans-serif;
  width: 340px;
`;

const Headers = styled.table`
  font-size: 16px;
  color: #b7b7b7;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
`;

const Icon = styled.div`
  flex-basis: 10%;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  flex-basis: 65%;
`;

const ViewAll = styled.div`
  flex-basis: 25%;
  text-align: center;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Line = styled.div`
  display: block;
  width: 340px;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 0;
  padding-bottom: 15px;
`;

// React Component:

const RelatedTrack = () => (
  <RelatedTracks className="related-track">
    <Headers className="headers">
      <Icon><i className="material-icons">graphic_eq</i></Icon>
      <Title className="title">Related tracks</Title>
      <ViewAll className="view-all">View all</ViewAll>
    </Headers>
    <Line className="top-line" />
    <RelatedTrackList />
  </RelatedTracks>
);


export default RelatedTrack;

//   <tbody>
//   <tr>
//           <td>
//             <i className="material-icons">graphic_eq</i>
//           </td>
//           <td>
//             <Title className="title">Related tracks</Title>
//           </td>
//           <ViewAll className="view-all">View all</ViewAll>
//         </tr>
// </tbody>
// ;
