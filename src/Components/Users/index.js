import React, {useState} from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Grid,
  Button,
  TableBody,
  TableHead,
} from "@material-ui/core";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar/Navbar";
import { Visibility } from "@material-ui/icons";
import  AddUser from "./AddUser"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AccountManagement = () => {
  const classes = useStyles();
const [isOpen, setIsOpen] = useState(false)

const handleOpen = () => {
  console.log('handleOpen');
  setIsOpen(true)
}
const handleClose = () => {
  console.log('handleClose');
  setIsOpen(false);
};
console.log('isOpen',isOpen);
  return (
    <div>
      <Navbar />

      <Grid
        container
        // style={{ borderStyle: "dashed", borderColor: "red" }}
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid
          container
          item
          style={{
            // borderStyle: "dashed",
            // borderColor: "yellow",
            padding: "50px",
          }}
          direction="column"
          alignItems="flex-end"
        >
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Ajouter un nouveau utilisateur
          </Button>
        </Grid>
        <Grid item style={{ padding: "50px" }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button color="primary" startIcon={<Visibility />}>
                        Consulter
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {isOpen && <AddUser open={isOpen} handleClose={handleClose} />}
    </div>
  );
};

export default AccountManagement;
