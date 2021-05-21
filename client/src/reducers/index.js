import { combineReducers } from "redux";
import userRegistration from "./registerUser";
import profileReducer from "./profileReducer";
export default combineReducers({
  registerMe: userRegistration,
  userProfile: profileReducer,
});
