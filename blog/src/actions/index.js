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
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //manually dispatch the inner action creator to dispatch the returned dispatch function
  await dispatch(fetchPosts());
  //wait for the api request of inner action creator to execute

  // //find unique userId
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // //iterate over unique userId and call fetchUser action creator
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId") // arguement from chain() is passed as first arguement
    .uniq() //result of map() is passed to this method
    .forEach((id) => dispatch(fetchUser(id))) //result of uniq() is processed here
    .value(); //executes all the steps only if value() is called as per lodash
};

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

// export const fetchUser = (id) => (dispatch) => {
//   //passing the id and dispatch function as arguement to memoized function
//   _fetchUser(id, dispatch);
// };

// //function to make request and dispatch action
// //made separately so it gets memoized only once
// //fetches each user one time
// //doest not allow to refetch the user
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
