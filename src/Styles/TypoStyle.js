import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogTitleRoot: {
    "& .MuiTypography-h6": {
      fontSize: 18,
      textTransform: "uppercase",
      color: "#5B13B4",
    },
  },
  saveButton: {
    color: "#FFFFFF",
    backgroundColor: "#5B13B4",
    fontSize: 16,
    font: "normal normal normal 16px/21px Futura LT",
    "&:hover": {
      backgroundColor: "#6F13DA",
    },
  },
  cancelButton: {
    color: "#B8B1F3",
    borderColor: "#B8B1F3",
    "&:hover": {
      borderColor: "#6F13DA",
      color: "#6F13DA",
    },
  },
  textFieldStyle: {
    minWidth: "100%",
    "& label.Mui-focused": {
      color: "#5B13B46E",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C4C4C4",
      },
      "&:hover fieldset": {
        borderColor: "#5B13B46E",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#5B13B46E",
      },
    },
  },
  root: {
    maxWidth: "50%",
    minWidth: "35%",
  },
  media: {
    height: 350,
  },
}));

export default useStyles;
