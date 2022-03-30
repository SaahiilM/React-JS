import { combinedReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Stay", duration: "2:21" },
    { title: "Need to know", duration: "3:30" },
    { title: "Blinding Lights", duration: "3:20" },
    { title: "Watermelon Sugar", duration: "2:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combinedReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
