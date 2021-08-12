import axios from "axios";

const KEY = "AIzaSyAUsGONhgXtCNztB_AtImUXvp69Gmv_6vA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
