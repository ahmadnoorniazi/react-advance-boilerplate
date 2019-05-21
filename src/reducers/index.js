import { combineReducers } from "redux";
import login from "./login";
import data from "./data";
import name from "./name";
import password from "./password";
import messages from "./messages";
import signUp from "./signUp";

export default combineReducers({
  login,
  messages,
  name,
  password,
  data,
  signUp
});
