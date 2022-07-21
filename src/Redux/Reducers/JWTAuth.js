// import { SHOW_MESSAGE } from "../../Constants/ActionTypes";

const initialState = {
  userAuth: "",
};

const Users = (state = initialState, action) => {

  if (action.type === "AUTH_USER") {
    return Object.assign({}, state, {
      userAuth: action.payload,
    });
  }
  return state;
};
export default Users;
