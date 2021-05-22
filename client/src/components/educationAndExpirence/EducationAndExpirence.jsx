/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { connect } from "react-redux";
import { createEducation, createExpirence } from "../../actions";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import {
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextareaAutosize,
  Button,
  Switch,
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(12),
  },
  body: {
    marginBottom: "2rem",
  },
  select: {
    marginBottom: "2rem",
    "& .MuiInputBase-root": {
      marginBottom: "10px",
    },
  },
  btn: {
    display: "block",
    width: "80px",
  },
}));
const EducationAndExpirence = (props) => {
  const classes = useStyles();
  const { handleSubmit, control, register } = useForm();

  const [selectedDate, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));
  const onDateChange = (date, value) => {
    setDate(date);
    setInputValue(value);
  };

  const onSubmit = (data) => {
    if (props.type === "Education") {
      return props.createEducation(data);
    } else if (props.type === "Expirence") {
      return props.createExpirence(data);
    }
  };
  const dateFormatter = (str) => {
    return str;
  };
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Typography variant="h3">{props.textTitle}</Typography>
        <Typography variant="body" className={classes.bodyTypo}>
          {props.textBody}
        </Typography>
      </div>
      <FormGroup className={classes.select} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={TextField}
          defaultValue=""
          name={props.name1}
          id="outlined-basic"
          label={props.text1}
          control={control}
          variant="outlined"
          size="small"
          fullWidth
        />
        <Controller
          as={TextField}
          defaultValue=""
          id="outlined-basic"
          name={props.name2}
          label={props.text2}
          control={control}
          variant="outlined"
          size="small"
          fullWidth
        />
        <Controller
          as={TextField}
          defaultValue=""
          name={props.name3}
          id="outlined-basic"
          control={control}
          label={props.text3}
          variant="outlined"
          size="small"
          fullWidth
        />
        <Typography variant="p">From Date</Typography>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <Controller
            as={TextField}
            defaultValue=""
            control={control}
            name="from"
            id="date"
            type="date"
            defaultValue=""
            value={selectedDate}
            inputValue={inputValue}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </MuiPickersUtilsProvider>
        <FormControlLabel
          control={
            <Switch inputRef={register} name="current" color="primary" />
          }
          label="Current Job"
        />

        <Typography variant="p">To Date</Typography>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <Controller
            as={TextField}
            defaultValue=""
            control={control}
            name="to"
            id="date"
            type="date"
            defaultValue=""
            value={selectedDate}
            inputValue={inputValue}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </MuiPickersUtilsProvider>
        <Controller
          as={TextareaAutosize}
          defaultValue=""
          name={props.name4}
          aria-label="minimum height"
          control={control}
          defaultValue=""
          rowsMin={5}
          placeholder={props.placeHolder}
          style={{ resize: "none" }}
        />
        <div style={{ display: "flex", marginTop: "8px" }}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
          <Link
            color="default"
            component={Button}
            to="/dashboard"
            variant="contained"
            style={{ marginLeft: "4px" }}
          >
            Go Back
          </Link>
        </div>
      </FormGroup>
    </div>
  );
};

export default connect(null, { createEducation, createExpirence })(
  EducationAndExpirence
);
