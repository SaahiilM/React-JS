import React from "react";
import { connect } from "react-redux"; // to communicate with the provider
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()} </div>;
  }
}

//take state object , do something and give out props
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(
  mapStateToProps,
  { selectSong } // selectSong:selectSong
)(SongList);
//connect() returns a function
//the next () calss the returned function with SongList parameter
