import _ from "lodash";
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

export const fetchUser = (id) => (dispatch) => {
  //passing the id and dispatch function as arguement to memoized function
  _fetchUser(id, dispatch);
};

//function to make request and dispatch action
//made separately so it gets memoized only once
//fetches each user one time
//doest not allow to refetch the user
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});
