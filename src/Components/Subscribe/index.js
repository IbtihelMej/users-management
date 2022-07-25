import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";
import { styles } from "../../Styles/Style";
import {
  requiredMessage,
  invalidePassword,
  passwordIncorrect,
} from "../../Constants/ErrorMessages";
import { isValidPassWord } from "../../Validation";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "../../Styles/TypoStyle";

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Subscribe = ({
  open,
  handleClose,
  userProfile,
  onSubscribe,
  subscrptionStatus,
  onDeleteSubscription,
}) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (subscrptionStatus) {
      onDeleteSubscription();
      handleClose();
    } else {
      if (!password.trim()) {
        setPasswordError(requiredMessage);
      } else if (!isValidPassWord(password)) {
        setPasswordError(invalidePassword);
      } else if (userProfile !== password) {
        setPasswordError(passwordIncorrect);
      } else {
        onSubscribe();
      }
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        {subscrptionStatus === true ? (
          <>
            {" "}
            <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.dialogTitleRoot}>
              Se désabonner de CGI ?
            </DialogTitle>
          </>
        ) : (
          <>
            <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.dialogTitleRoot}>
              Nouvel abonné{" "}
            </DialogTitle>
            <DialogContent dividers>
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>

                  <TextField
                    required
                    id="password"
                    className={classes.textFieldStyle}
                    type={showPassword ? "text" : "password"}
                    label="Mot de passe"
                    variant="outlined"
                    placeholder="Retaper votre mot de passe"
                    fullWidth
                    onChange={(e) => {
                      setPassword(e.target.value);
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
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}

        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained" className={classes.cancelButton}>
            Annuler
          </Button>
          <Button
            autoFocus
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.saveButton}
          >
            {subscrptionStatus === true ? "Se désabonné" : "S'abonner "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Subscribe;
