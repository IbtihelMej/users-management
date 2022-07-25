import { GET_USERS } from "../../Constants/ActionTypes";

const initialState = {
  users: [],
};

const Users = (state = initialState, action) => {
  if (action.type === GET_USERS) {
    return Object.assign({}, state, {
      users: action.payload.data,
    });
  }
  return state;
};
export default Users;
