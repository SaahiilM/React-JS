import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList.";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";

const App = () => {
  // state = { videos: [], selectedVideo: null };

  const [selectedVideo, setSelectedVideo] = useState(null);

  // componentDidMount() {
  //   this.onTermSubmit("latest");
  // }

  const [videos, serach] = useVideos("latest");

  useEffect(() => {
    setSelectedVideo(videos[0]);

    //reRender when we get a new list of videos
  }, [videos]);

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
      <SearchBar onFormSubmit={serach} />
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
