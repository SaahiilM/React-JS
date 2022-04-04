import jsonPlaceholder from "../api/jsonPlaceholder";

// export const fetchPosts = async () => {
//   return async  (dispatch, getState) =>{
//     const response = await jsonPlaceholder.get("/posts");
//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response,
//     });
//   };
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response,
  });
};
