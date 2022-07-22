import React, { useEffect } from "react";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../../Redux/Actions/Alert";


export const AlertComponent = () => {
  const dispatch = useDispatch();
  const { alert, loading } = useSelector(({ alertReducer }) => alertReducer);
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideMessage());
    }, 5000);
  }, [dispatch]);
console.log("loading", loading);
  return (
    <div>
      {" "}
     
      <Alert variant="outlined" severity={alert.type}>
        {alert.message}
      </Alert>
    </div>
  );
};
