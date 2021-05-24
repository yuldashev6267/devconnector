import React, { useEffect } from "react";
import { connect } from "react-redux";
import { myProfile, deleteEducation, deleteExpirence } from "../../actions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  paper: {
    width: 900,
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  typo: {
    marginBottom: theme.spacing(4),
  },
}));
let len;

const EducationAndExpirenceTable = (props) => {
  const classes = useStyles();

  console.log(props.profile);
  const deleteDate = (id) => {
    if (props.type === "Education") {
      return props.deleteEducation(id);
    } else {
      return props.deleteExpirence(id);
    }
  };
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Typography variant="h5" className={classes.typo}>
        {props.typoTitle}
      </Typography>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{props.name}</StyledTableCell>
            <StyledTableCell align="right">{props.title}</StyledTableCell>
            <StyledTableCell align="right">{props.years}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.profile.profile?.map((el) => {
            const iterableArr =
              props.type === "Education" ? el.education : el.expirence;
            console.log(iterableArr);
            return iterableArr.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {props.type === "Education" ? row.school : row.companyName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {props.type === "Education" ? row.degree : row.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {props.type === "Education"
                    ? `From +${row.from} To ${row.current ? "Now" : row.to}`
                    : `From ${row.from} To ${row.current ? "Now" : row.to}`}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteDate(row._id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ));
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default connect(null, {
  deleteExpirence,
  deleteEducation,
})(EducationAndExpirenceTable);
