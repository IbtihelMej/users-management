import { SHOW_MESSAGE, HIDE_MESSAGE } from "../../Constants/ActionTypes";

const initialState = {
  alert: "",
  status: false,
};

const Alert = (state = initialState, action) => {
  if (action.type === SHOW_MESSAGE) {
    return Object.assign({}, state, {
      alert: action.payload,
      status: true,
    });
  }

  if (action.type === HIDE_MESSAGE) {
    return Object.assign({}, state, {
      alert: action.payload,
      status: false,
    });
  }

  return state;
};
export default Alert;
