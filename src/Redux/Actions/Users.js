import { GET_USERS, ADD_USER, SHOW_MESSAGE } from "../../Constants/ActionTypes";
import { crudApp } from "../../Services/crudApp";
import { fetchStart } from "../Actions/JWTAuth";

export const getUsers = () => {
  return (dispatch) => {
    crudApp
      .get(`/users?page=1`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: GET_USERS, payload: response.data });
        }
      })
      .catch((error) => {
        console.log("erreur");
      });
  };
};

export const addUser = (user, lengthListUser) => {
  let dataUser = {
    name: user.lastName + " " + user.firstName,
    job: user.job,
  };
  // object to update store
  let dataStore = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: user.email,
    first_name: user.firstName,
    id: lengthListUser + 1,
    last_name: user.lastName,
  };
  return (dispatch) => {
    dispatch(fetchStart());
    crudApp
      .post(`/users`, dataUser)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SHOW_MESSAGE,
            payload: {
              type: "success",
              message:
                "La création d'un nouveau utilisateur a été effectuée avec succès",
            },
          });
          dispatch({ type: ADD_USER, payload: dataStore });
        }
      })
      .catch((error) => {
        dispatch({
          type: SHOW_MESSAGE,
          payload: {
            type: "error",
            message: "Il y a eu un problème. Merci de réessayer",
          },
        });
      });
  };
};
