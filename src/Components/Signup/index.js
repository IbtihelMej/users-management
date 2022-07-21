import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import logoCGI from '../../Assets/CGI_logo.png'


const SignUp = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate("/signin");
  };

  const handleSubmit = () => {
    console.log('fffff');
  }

  return (
    <div className="signin">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={6} sm={5} md={3}>
          <Paper elevation={10} className="paper">
            <Grid align="center" style={{marginTop:"30px"}}>
              <img src={logoCGI} alt="logoCGI" width={'60px'}/>
              <h2>Créer un compte</h2>
            </Grid>
            <TextField
              style={{ margin: "1em auto 2em" }}
              required
              id="email"
              label="Email"
              variant="outlined"
              placeholder="Entrer votre email"
              fullWidth
            />
            <TextField
              required
              type="password"
              id="password"
              label="Mot de passe"
              variant="outlined"
              placeholder="Entrer votre mot de passe"
              fullWidth
            />

            <Button
              style={{ margin: "20px 0" }}
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              onClick={handleSubmit()}
            >
              Registre
            </Button>

            <Typography>
              {" "}
              Je suis déjà membre ? <Link onClick={handleLinkClick}>Se connecter</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
