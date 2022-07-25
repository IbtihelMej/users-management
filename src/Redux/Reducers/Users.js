import { GET_USERS, ADD_USER } from "../../Constants/ActionTypes";

const initialState = {
  users: [],
};

const Users = (state = initialState, action) => {
  if (action.type === GET_USERS) {
    return Object.assign({}, state, {
      users: action.payload.data,
    });
  }
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      users: [action.payload, ...state.users],
    });
  }
  return state;
};
export default Users;


