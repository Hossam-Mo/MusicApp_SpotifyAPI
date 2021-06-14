import { get_user } from "./actionTypes";

export const getUser = (state = null, action: any) => {
  switch (action.type) {
    case get_user.type:
      return action.user;
    default:
      return state;
  }
};
