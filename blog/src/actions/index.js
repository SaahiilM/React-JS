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
    // getting data from the api
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};
