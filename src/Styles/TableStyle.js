import { lighten, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    // width: "100%",
    marginBottom: theme.spacing(4),
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  },
  container: {
    maxHeight: 700,
  },
  table: {
    minWidth: 750,
  },

  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  
  },
  documentTitleStyle:{
    color:"#666666"
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: -8,
    marginRight: -8,
  },
  socialLinkCol: {
    paddingLeft: 8,
    paddingRight: 8,
    '& .btn': {
      backgroundColor: '#E8E7F6',
      color: theme.palette.primary.main,
      padding: 6,
    },
  },
  zoomBtn: {
  

  /* Full height */
  height: '100%',

  /* Center and scale the image nicely */

  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  }
 
}));

export default useStyles;
