import axios from "axios";

const KEY = "AIzaSyCWDScLAGutiejIUSd2BlN90dXM0aOswLQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
