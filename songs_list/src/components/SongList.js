import React from "react";
import { connect } from "react-redux"; // to communicate with the provider

class SongList extends React.Component {
  render() {
    return <div>Song List</div>;
  }
}

export default connect()(SongList);
//connect() returns a function
//the next () calss the returned function with SongList parameter
