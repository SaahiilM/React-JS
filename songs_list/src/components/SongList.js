import React from "react";
import { connect } from "react-redux"; // to communicate with the provider

class SongList extends React.Component {
  render() {
    return <div>Song List</div>;
  }
}

//take state object , do something and give out props
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(SongList);
//connect() returns a function
//the next () calss the returned function with SongList parameter
