//named as index.js to make webpack import this file automatically from the directory

//Action creator
//export to do multiple functions export from the same file (named export)
export const selectSong = (song) => {
  //return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
