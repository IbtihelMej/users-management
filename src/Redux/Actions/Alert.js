import { HIDE_MESSAGE } from "../../Constants/ActionTypes";

export const hideMessage = () => {
    return (dispatch) => {
        dispatch({
            type: HIDE_MESSAGE,
            payload: ""
          });
    };
};