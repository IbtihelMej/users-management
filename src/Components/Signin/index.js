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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate("/signup");
  };
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
            <Grid align="center">
              <Avatar style={{ backgroundColor: "#38b474" }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Se connecter</h2>
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

            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Se souvenir de moi"
            />

            <Button
              style={{ margin: "20px 0" }}
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
            >
              Se connecter
            </Button>

            <Typography style={{ marginBottom: "1em" }}>
              <Link href="#">Mot de passe oublié?</Link>
            </Typography>

            <Typography>
              {" "}
              Avez-vous un compte ? <Link onClick={handleLinkClick} to="/signup">S'inscrire</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
