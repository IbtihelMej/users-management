import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../Validation";
import {
  requiredMessage,
  emailNotValid,
} from "../../Constants/ErrorMessages";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { onLogin } from "../../Redux/Actions/JWTAuth";
import { useDispatch, useSelector } from "react-redux";
import { AlertComponent } from "../CommunComponents/AlertComponent";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PageLoader from "../CommunComponents/PageLoader"

const SignIn = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate("/signup");
  };

  const dispatch = useDispatch();
  const { status, loading } = useSelector(({ alertReducer }) => alertReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setEmailError(requiredMessage);
    } else if (!isValidEmail(email)) {
      setEmailError(emailNotValid);
    } else if (!password) {
      setPasswordError(requiredMessage);
    } else {
       dispatch(onLogin({ email, password }));
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const _handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
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
            {loading && <PageLoader />}
            {status && <AlertComponent />}
            <TextField
              style={{ margin: "1em auto 2em" }}
              required
              id="email"
              label="Email"
              variant="outlined"
              placeholder="Entrer votre email"
              fullWidth
              onChange={(event) => {
                setEmail(event.target.value.trim());
                setEmailError("");
              }}
              error={emailError}
              helperText={emailError}
              onKeyPress={(event) => _handleKeyPress(event)}
            />
            <TextField
              required
              id="password"
              type={showPassword ? "text" : "password"}
              label="Mot de passe"
              variant="outlined"
              placeholder="Entrer votre mot de passe"
              fullWidth
              onKeyPress={(event) => _handleKeyPress(event)}
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordError("");
              }}
              error={passwordError}
              helperText={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              onClick={handleSubmit}
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
