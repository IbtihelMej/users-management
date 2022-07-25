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
import { requiredMessage, emailNotValid } from "../../Constants/ErrorMessages";
import { isValidEmail } from "../../Validation";
import PageLoader from "../CommunComponents/PageLoader";
import { AlertComponent } from "../CommunComponents/AlertComponent";

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

const initialUser = {
  lastName: "",
  firstName: "",
  email: "",
  job: "",
};

const AddUser = ({ open, handleClose, onSubmitData, status, loading }) => {
  const [user, setUser] = useState(initialUser);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [jobError, setJobError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.lastName.trim()) {
      setLastNameError(requiredMessage);
    } else if (!user.firstName.trim()) {
      setFirstNameError(requiredMessage);
    } else if (!isValidEmail(user.email)) {
      setEmailError(emailNotValid);
    } else if (!user.job.trim()) {
      setJobError(requiredMessage);
    } else {
      onSubmitData(user);
    }
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
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter un nouveau utilisateur{" "}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              {loading && <PageLoader />}
              {status && <AlertComponent />}
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                name="lastName"
                label="Nom"
                variant="outlined"
                value={user.lastName}
                onChange={(e) => {
                  setUser({
                    ...user,
                    [e.target.name]: e.target.value.toUpperCase(),
                  });
                  setLastNameError("");
                }}
                error={lastNameError}
                helperText={lastNameError}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                name="firstName"
                label="Prénom"
                variant="outlined"
                value={user.firstName}
                onChange={(e) => {
                  setUser({
                    ...user,
                    [e.target.name]:
                      e.target.value.charAt(0).toUpperCase() +
                      e.target.value.substring(1),
                  });
                  setFirstNameError("");
                }}
                error={firstNameError}
                helperText={firstNameError}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={user.email}
                onChange={(e) => {
                  setUser({
                    ...user,
                    [e.target.name]: e.target.value.trim(),
                  });
                  setEmailError("");
                }}
                error={emailError}
                helperText={emailError}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                fullWidth
                id="job"
                name="job"
                label="Travail"
                variant="outlined"
                value={user.job}
                onChange={(e) => {
                  setUser({
                    ...user,
                    [e.target.name]:
                      e.target.value.charAt(0).toUpperCase() +
                      e.target.value.substring(1),
                  });
                  setJobError("");
                }}
                error={jobError}
                helperText={jobError}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained">
            Annuler
          </Button>
          <Button
            autoFocus
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUser;
