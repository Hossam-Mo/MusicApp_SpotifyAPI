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

interface song {
  name: string;
  artist: string;
  imageUrl: string;
  audio: HTMLAudioElement;
}
export interface getMp3Action {
  type: string;
  song?: song | null;
}

const getMp3Url = (state = null, action: any) => {
  switch (action.type) {
    case get_mp3Url.type:
      return action.song;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: getUser,
  spotfiy: getSpotfiy,
  song: getMp3Url,
});
