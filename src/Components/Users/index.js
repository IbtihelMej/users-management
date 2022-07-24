import React from "react";
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
          <Button variant="contained" color="primary">
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
                  {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
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
                    {/* <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>


    </div>
  );
};

export default AccountManagement;
