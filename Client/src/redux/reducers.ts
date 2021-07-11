import { combineReducers } from "redux";
import { get_mp3Url, get_spotfiy, get_user } from "./actionTypes";

export const getUser = (state = null, action: any) => {
  switch (action.type) {
    case get_user.type:
      return action.user;
    default:
      return state;
  }
};

export const getSpotfiy = (state = null, action: any) => {
  switch (action.type) {
    case get_spotfiy.type:
      return action.spotfiy;
    default:
      return state;
  }
};
const getMp3Url = (state = null, action: any) => {
  switch (action.type) {
    case get_mp3Url.type:
      return action.audio;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: getUser,
  spotfiy: getSpotfiy,
  url: getMp3Url,
});
