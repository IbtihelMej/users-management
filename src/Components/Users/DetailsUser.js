import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
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
import { makeStyles } from "@material-ui/core/styles";

import imageCarte from "../../Assets/detail.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 350,
  },
});

const DetailsUser = () => {
  const navigate = useNavigate();
  const classes = useStyles();

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
          item
          style={{
            padding: "3%",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageCarte}
                title="Contemplative Reptile"
                src="picture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsUser;
