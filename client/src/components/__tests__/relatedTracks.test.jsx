import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';

import App from '../App';
import RelatedTrackList from '../RelatedTrackList';
import RelatedTrackEntry from '../RelatedTrackEntry';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Related Track List Component', () => {
  let relatedTrackList;

  beforeEach(() => {
    const songs = [{
      id: '1',
      artist: 'San Fermin',
      title: 'No Promises',
      plays: 540,
      likes: 302,
      reposts: 45,
      comments: 37,
      relatedTracks: [34, 2, 18],
    }, {
      id: '2',
      artist: 'Florence + the Machine',
      title: 'Drumming Song',
      plays: 1030,
      likes: 589,
      reposts: 89,
      comments: 56,
      relatedTracks: [86, 33, 24],
    }, {
      id: '3',
      artist: 'Youth in a Roman Field',
      title: 'I Saw You',
      plays: 234,
      likes: 131,
      reposts: 23,
      comments: 18,
      relatedTracks: [4, 32, 56],
    }];
    relatedTrackList = mount(<RelatedTrackList />);
    relatedTrackList.setState({ songs });
  });

  it('should render without throwing an error', () => {
    expect(relatedTrackList.find('div.relatedTrackList').exists()).toBe(true);
  });

  it('should render a related track component for each song in state', () => {
    const songs = relatedTrackList.find('.title');
    expect(songs.length).toEqual(3);
    expect(songs.first().text()).toEqual('No Promises');
    expect(songs.at(1).text()).toEqual('Drumming Songs');
    expect(songs.at(2).text()).toEqual('I Saw You');
  });
});

describe('Related Tracks Module', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('#app').exists()).toBe(true);
  });
});
