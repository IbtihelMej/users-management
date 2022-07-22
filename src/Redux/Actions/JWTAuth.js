import axios from "../../Config";
import { SHOW_MESSAGE, FETCH_START, SIGNIN_USER_SUCCESS } from "../../Constants/ActionTypes";

export const onRegister = (dataAuth) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .post("/register", dataAuth)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: SHOW_MESSAGE,
            payload: {
              type: "success",
              message:
                "La création d'un nouveau compte a été effectuée avec succès",
            },
          });
        }
      })
      .catch(function (error) {
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

export const onLogin = (dataAuth) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_START,
    });
    axios
      .post("/login", dataAuth)
      .then(({ data }) => {
        if (data) {
          localStorage.setItem("kfdsa3UQ71V", data.token);
          dispatch({
            type: SHOW_MESSAGE,
            payload: {},
          });
          dispatch({
            type: SIGNIN_USER_SUCCESS,
            payload:  data.token,
          });
        }
      })
      .catch(function (error) {
        dispatch({
          type: SHOW_MESSAGE,
          payload: {
            type: "error",
            message:
              "Votre identifiant ou mot de passe est incorrect \n Veuillez vérifier!",
          },
        });
      });
  };
};

export const fetchStart = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_START,
    });
  };
};
