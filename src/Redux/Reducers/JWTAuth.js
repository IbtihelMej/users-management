import { SIGNIN_USER_SUCCESS } from "../../Constants/ActionTypes";

const initialState = {
  userAuth: "",
};

const Users = (state = initialState, action) => {
  if (action.type === SIGNIN_USER_SUCCESS) {
    return Object.assign({}, state, {
      userAuth: action.payload,
    });
  }
  return state;
};
export default Users;
