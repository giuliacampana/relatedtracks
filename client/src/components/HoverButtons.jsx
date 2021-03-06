import React from 'react';
import styled from 'styled-components';

// CSS Styled Components:

const HoverButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 0;
  left: 180px;
  height: 21px;
`;

const LikeButton = styled.span`
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding-left: 2px;
  padding-right: 2px;
  background-color: white;
  height: 21px;
  width: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreButton = styled.div`
  background-color: white;
  height: 21px;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const MoreIcon = styled.i`
  font-size: 24px;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 160px;
`;

const DropdownRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: space-between;
  border: 1px solid #cccccc;
  font-size: 14px;
  background-color: white;
  padding: 2px;
  &:hover {
    cursor: pointer;
    background-color: #f4f4f4;
  }
`;

const DropdownIcon = styled.div`
  display: flex;
  align-self: center;
`;

const DropdownAction = styled.span`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 15px;
`;

// React Component:

class HoverButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes,
      liked: this.props.liked,
      showHoverButtons: this.props.showHoverButtons,
      showDropdown: this.props.showDropdown,
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
  }

  handleDropdownClick(event) {
    event.preventDefault();

    this.setState({
      showHoverButtons: true,
      showDropdown: !this.state.showDropdown,
    });
  }

  render() {
    return (
      <HoverButtonsWrapper className="media-right">
        <LikeButton className="like-button" onClick={this.props.handleLikeClick}><ion-icon name="heart" /></LikeButton>
        <MoreButton className="dot-dot-dot">
          <MoreIcon className="material-icons md-24 more" onClick={this.handleDropdownClick}>more_horiz</MoreIcon>

          { this.state.showDropdown ? (
            <DropdownMenu className="dropdown-content">
              <DropdownRow className="dropdown-repost">
                <DropdownIcon><ion-icon name="repeat" className="dropdown-icon" /></DropdownIcon>
                <DropdownAction>Repost</DropdownAction>
              </DropdownRow>
              <DropdownRow className="dropdown-share">
                <DropdownIcon><ion-icon name="open" className="dropdown-icon" /></DropdownIcon>
                <DropdownAction>Share</DropdownAction>
              </DropdownRow>
              <DropdownRow className="dropdown-next">
                <DropdownIcon><i className="material-icons">playlist_play</i></DropdownIcon>
                <DropdownAction>Add to Next up</DropdownAction>
              </DropdownRow>
              <DropdownRow className="dropdown-playlist">
                <DropdownIcon><i className="material-icons">playlist_add</i></DropdownIcon>
                <DropdownAction>Add to playlist</DropdownAction>
              </DropdownRow>
              <DropdownRow className="dropdown-station">
                <DropdownIcon><ion-icon name="radio" /></DropdownIcon>
                <DropdownAction>Station</DropdownAction>
              </DropdownRow>
            </DropdownMenu>
            ) : (
                null
            )
          }
        </MoreButton>
      </HoverButtonsWrapper>
    );
  }
}
export default HoverButtons;
