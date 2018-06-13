import React from 'react';
import axios from 'axios';

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
      <div className="media-right">
        <span className="like-button" onClick={this.props.handleLikeClick}><ion-icon name="heart" /></span>
        <span className="dot-dot-dot">
          <i className="material-icons md-24 more" onClick={this.handleDropdownClick}>more_horiz</i>

          { this.state.showDropdown ? (
            <div className="dropdown-content">
              <div className="dropdown-repost">
                <ion-icon name="repeat" className="dropdown-icon" />
                <span>Repost</span>
              </div>
              <div className="dropdown-share">
                <ion-icon name="open" className="dropdown-icon" />
                <span>Share</span>
              </div>
              <div className="dropdown-next">
                <i className="material-icons">playlist_play</i>
                <span>Add to Next up</span>
              </div>
              <div className="dropdown-playlist">
                <i className="material-icons">playlist_add</i>
                <span>Add to playlist</span>
              </div>
              <div className="dropdown-station">
                <ion-icon name="radio"></ion-icon>
                <span>Station</span>
              </div>
            </div>
            ) : (
                null
            )
          }
        </span>
      </div>
    );
  }
}
export default HoverButtons;
