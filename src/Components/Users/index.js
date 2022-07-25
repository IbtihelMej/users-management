import React, { useState, useEffect } from "react";
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
import AddUser from "./AddUser";
import {getUsers} from "../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";


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



const useStyles = makeStyles({
  // table: {
  //   minWidth: 700,
  // },
});

const AccountManagement = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector(({ userReducer }) => userReducer);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  console.log('usersusers',users.data);
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
            padding: "5%"
          }}
          direction="column"
          alignItems="flex-end"
        >
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Ajouter un nouveau utilisateur
          </Button>
        </Grid>
        <Grid item style={{ padding: "5%" }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.email}
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
