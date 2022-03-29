import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList.";
import VideoDetails from "./VideoDetails";

const App = () => {
  // state = { videos: [], selectedVideo: null };
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // componentDidMount() {
  //   this.onTermSubmit("latest");
  // }
  useEffect(() => {
    onTermSubmit("latest");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    // this.setState({
    //   videos: response.data.items,
    //   selectedVideo: response.data.items[0],
    // });

    setVideo(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  // onVideoSelect = (video) => {
  //   this.setState({ selectedVideo: video });
  // };

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };
  //refactored to be inline line 53

  return (
    <div className="ui container">
      {/* <SearchBar onFormSubmit={this.onTermSubmit} /> */}
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/* <VideoDetails video={this.state.selectedVideo} /> */}
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              // onVideoSelect={this.onVideoSelect}
              onVideoSelect={setSelectedVideo}
              // videoss={this.state.videos}
              videoss={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   render() {

//   }
// }

export default App;
