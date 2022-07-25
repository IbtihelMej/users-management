import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import _ from "lodash";
import { getUsers } from "../../Redux/Actions/Users";
import useStyles from "../../Styles/TypoStyle";


const DetailsUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(({ userReducer }) => userReducer);
  const [userSelected, setUserSelected] = useState({});
  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    if (_.isEmpty(users)) {
      dispatch(getUsers());
    }
    const detailUser = users.find((element) => element.id === parseInt(id));
    setUserSelected(detailUser);
  }, [users, id, dispatch]);

  const handleBackUsers = () => {
    navigate("/app/users");
  };
  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid
          container
          item
          style={{
            padding: "3%",
          }}
          direction="column"
          alignItems="flex-start"
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<KeyboardBackspaceIcon />}
            onClick={handleBackUsers}
          >
            Retour
          </Button>
        </Grid>
        <Grid
          container
          style={{
            padding: "3%",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={userSelected?.avatar}
                  title="avatar user"
                  src="picture"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.dialogTitleRoot}>
                  
                      <em>
                        <b>Identifiant : {id}</b>
                      </em>
                    
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="p"
                  >
                    <b>Nom :</b> {userSelected?.last_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="p"
                  >
                    <b>Prénom :</b> {userSelected?.first_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="p"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="p"
                  >
                    <b> Email : </b>
                    {userSelected?.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsUser;
