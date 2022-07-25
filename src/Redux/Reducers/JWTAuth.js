import {
  SIGNIN_USER_SUCCESS,
  ADD_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
} from "../../Constants/ActionTypes";

const initialState = {
  userAuth: localStorage.getItem("kfdsa3UQ71V"),
  userProfile: localStorage.getItem("OOPgtd563"),
  subscrptionStatus: localStorage.getItem("pZot34sc1V"),
};

const Users = (state = initialState, action) => {
  if (action.type === SIGNIN_USER_SUCCESS) {
    return Object.assign({}, state, {
      userAuth: action.payload.token,
      userProfile: action.payload.password,
    });
  }
  if (action.type === ADD_SUBSCRIPTION) {
    return Object.assign({}, state, {
      subscrptionStatus: true,
    });
  }
  if (action.type === DELETE_SUBSCRIPTION) {
    return Object.assign({}, state, {
      subscrptionStatus: false,
    });
  }
  return state;
};
export default Users;
