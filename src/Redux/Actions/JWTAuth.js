import axios from "../../Config";
import { SHOW_MESSAGE } from "../../Constants/ActionTypes";

export const onRegister = (dataAuth) => {
  return (dispatch) => {
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
          localStorage.setItem("kfdsa3UQ71V", data.token);
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

