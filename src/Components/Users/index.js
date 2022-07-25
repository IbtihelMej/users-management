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
import { useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar/Navbar";
import { Visibility } from "@material-ui/icons";
import AddUser from "./AddUser";
import { getUsers, addUser } from "../../Redux/Actions/Users";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Subscribe from "../Subscribe";
import {
  addSubscription,
  deleteSubscription,
} from "../../Redux/Actions/JWTAuth";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ede7f6",
    color: theme.palette.common.black,
    textAlign: "center",
  },
  body: {
    fontSize: 14,
    textAlign: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AccountManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector(({ userReducer }) => userReducer);
  const { status, loading } = useSelector(({ alertReducer }) => alertReducer);
  const { userProfile, subscrptionStatus } = useSelector(
    ({ authReducer }) => authReducer
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenToSubscribe, setIsOpenToSubscribe] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsOpenToSubscribe(false);
  };
  const handleDetails = (e, row) => {
    e.preventDefault();
    navigate(`/app/user/details/${row.id}`);
  };

  const onSubmitData = (data) => {
    const lengthListUser = users.length;
    dispatch(addUser(data, lengthListUser));
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  const handleSubscribe = () => {
    setIsOpenToSubscribe(true);
  };

  const onSubscribe = () => {
    dispatch(addSubscription());
    setIsOpenToSubscribe(false);
  };

  const onDeleteSubscription = () => {
    dispatch(deleteSubscription());
    setIsOpenToSubscribe(false);
  };

  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid
          container
          style={{
            padding: "3%",
          }}
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              startIcon={<AddIcon />}
            >
              Ajouter un nouveau utilisateur
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleSubscribe}
              style={{
                background: subscrptionStatus === true ? "Grey" : "red",
                color: "white",
              }}
            >
              S'abonner
            </Button>
          </Grid>
        </Grid>
        <Grid item style={{ padding: "3%" }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
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
                      <Button
                        startIcon={<Visibility style={{ color: "#5B13B4" }} />}
                        onClick={(e) => handleDetails(e, row)}
                        style={{
                          color: "#5B13B4",
                          borderColor: "#5B13B4",
                          "&:hover": {
                            borderColor: "#6F13DA",
                            color: "#6F13DA",
                          },
                        }}
                      >
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
      {isOpen && (
        <AddUser
          open={isOpen}
          handleClose={handleClose}
          onSubmitData={onSubmitData}
          status={status}
          loading={loading}
        />
      )}
      {isOpenToSubscribe && (
        <Subscribe
          open={isOpenToSubscribe}
          handleClose={handleClose}
          userProfile={userProfile}
          onSubscribe={onSubscribe}
          subscrptionStatus={subscrptionStatus}
          onDeleteSubscription={onDeleteSubscription}
        />
      )}
    </div>
  );
};

export default AccountManagement;
