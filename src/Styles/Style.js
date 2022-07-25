export const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  cancelButton: {
    color: "#B8B1F3",
    borderColor: "#B8B1F3",
    "&:hover": {
      borderColor: "#6F13DA",
      color: "#6F13DA",
    },
  },
});
