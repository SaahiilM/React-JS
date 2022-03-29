import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    // this.setState({
    //   videos: response.data.items,
    //   selectedVideo: response.data.items[0],
    // });

    setVideo(response.data.items);
  };

  //return as an array
  return [videos, search];
  //return as object
  //return {videos, onTermSubmit}
};

export default useVideos;
