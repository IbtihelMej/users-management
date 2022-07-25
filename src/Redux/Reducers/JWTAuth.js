import { SIGNIN_USER_SUCCESS } from "../../Constants/ActionTypes";

const initialState = {
  userAuth: localStorage.getItem("kfdsa3UQ71V"),
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
