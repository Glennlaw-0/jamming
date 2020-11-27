import React from 'react';
import './Track.css';

// Check to see if the renderAction Method is correct and if it has been injected into the jsx correctly

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);

    this.addTrack = this.addTrack.bind(this);

    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artists} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
