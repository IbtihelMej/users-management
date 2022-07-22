import {
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  FETCH_START,
} from "../../Constants/ActionTypes";

const initialState = {
  alert: "",
  status: false,
  loading: false,
};

const Alert = (state = initialState, action) => {
  if (action.type === SHOW_MESSAGE) {
    return Object.assign({}, state, {
      alert: action.payload,
      status: true,
      loading: false,
    });
  }

  if (action.type === HIDE_MESSAGE) {
    return Object.assign({}, state, {
      alert: action.payload,
      status: false,
    });
  }
  if (action.type === FETCH_START) {
    return Object.assign({}, state, {
      loading: true,
    });
  }

  return state;
};
export default Alert;
