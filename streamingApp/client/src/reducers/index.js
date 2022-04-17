import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  // form: formReducer, //only the key 'form' is to be used
  streams: streamReducer,
});
