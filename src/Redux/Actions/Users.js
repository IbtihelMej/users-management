import { GET_USERS } from "../../Constants/ActionTypes";
import { crudApp } from "../../Services/crudApp";
import { fetchStart } from "../Actions/JWTAuth";

export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    crudApp
      .get(`/users?page=1`)
      .then((response) => {
        console.log("data", response);
        if (response.status === 200) {
          dispatch({ type: GET_USERS, payload: response.data });
        }
      })
      .catch((error) => {
        console.log("ereeuuuur");
        //   dispatch(fetchError("Il y a eu un problème. Merci de réessayer"));
      });
  };
};
