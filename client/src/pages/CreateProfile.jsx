import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Typography,
  FormControl,
  FormGroup,
  InputLabel,
  NativeSelect,
  FormHelperTextHel,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { createProfile, myAccount } from "../actions";
import clsx from "clsx";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4rem 0 0.5rem 2rem",
    "& .MuiFormHelperText-root": {
      marginBottom: theme.spacing(2),
    },
  },
  person: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "0.5rem",
  },
  select: {
    maxWidth: "80%",
    marginBottom: "2rem",
  },
  divBtn: {
    display: "block",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    display: "block",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalWidth: {
    maxWidth: 300,
  },
  textFieldRoot: {
    "& .MuiOutlinedInput-root": {
      marginBottom: "1rem",
    },
  },
}));

const CreateProfile = (props) => {
  useEffect(() => {
    props.myAccount();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.createProfile(data);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ color: "#32DE8A" }}>
        Create Your Profile
      </Typography>
      <div className={classes.person}>
        <PersonIcon />
        <Typography variant="h6">
          Let's get some information to make your profile stand out
        </Typography>
      </div>
      <FormGroup className={classes.select} onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="status-native-helper">
          Select Professional status
        </InputLabel>
        <Controller
          as={NativeSelect}
          name="status"
          defaultValue=""
          control={control}
          variant="outlined"
          id="status-native-helper"
        >
          <option value="0"></option>
          <option value="Developer">Developer</option>
          <option value="Junior Web Developer">Junior Web Developer</option>
          <option value="Middle Web Developer">Middle Web Developer</option>
          <option value="Senior Web Developer">Senior Web Developer</option>
          <option value="Desktop App Developer">Desktop App Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Intern">Intern</option>
          <option value="Instructor or Teacher">Instructor or Teacher</option>
          <option value="Other">Other</option>
        </Controller>
        <FormHelperText filled>
          Give us an idea of where you are at in your career
        </FormHelperText>
        <Controller
          as={TextField}
          control={control}
          defaultValue=""
          name="company"
          label="Company"
          variant="outlined"
          size="small"
        />
        <FormHelperText>Could be your own or one you work for</FormHelperText>
        <Controller
          as={TextField}
          control={control}
          defaultValue=""
          name="website"
          label="Website"
          variant="outlined"
          size="small"
        />
        <FormHelperText>Could be your own or a company website</FormHelperText>
        <Controller
          as={TextField}
          control={control}
          defaultValue=""
          name="location"
          label="Location"
          variant="outlined"
          size="small"
        />
        <FormHelperText>City & state suggested (Eg Boston,MA)</FormHelperText>
        <Controller
          as={TextField}
          control={control}
          defaultValue=""
          name="skills"
          label="*Skills"
          variant="outlined"
          size="small"
        />
        <FormHelperText>
          Please use comma separated values (eg HTML,CSS,JavaScript,Python)
        </FormHelperText>
        <Controller
          as={TextareaAutosize}
          control={control}
          name="description"
          defaultValue=""
          aria-label="minimum height"
          rowsMin={3}
          placeholder="A short bio of yourself"
          style={{ resize: "none" }}
        />
        <FormHelperText>Tell us a little about yourself</FormHelperText>
        <div className={classes.divBtn}>
          <Button
            display="inline"
            variant="contained"
            size="small"
            onClick={handleOpen}
          >
            Add social Network links
          </Button>
          <Typography
            variant="button"
            display="inline"
            style={{ marginLeft: "0.5rem" }}
          >
            <em>optional</em>
          </Typography>
          <Modal
            name="modal"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            keepMounted
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open} size="small">
              <div
                className={clsx(
                  classes.paper,
                  classes.textFieldRoot,
                  classes.modalWidth
                )}
              >
                <TwitterIcon style={{ color: "blue" }} />

                <Controller
                  as={TextField}
                  control={control}
                  defaultValue=""
                  name="twitter"
                  label="Twitter URL"
                  variant="outlined"
                  size="small"
                  autoComplete
                  fullWidth
                />
                <Controller
                  as={TextField}
                  control={control}
                  defaultValue=""
                  name="facebook"
                  label="Facebook URL"
                  variant="outlined"
                  size="small"
                  autoComplete
                  fullWidth
                />
                <Controller
                  as={TextField}
                  control={control}
                  defaultValue=""
                  name="youtube"
                  label="Youtube URL"
                  variant="outlined"
                  size="small"
                  autoComplete
                  fullWidth
                />
                <Controller
                  as={TextField}
                  control={control}
                  defaultValue=""
                  name="linkedin"
                  label="Linkedin URL"
                  variant="outlined"
                  size="small"
                  autoComplete
                  fullWidth
                />
                <Controller
                  as={TextField}
                  control={control}
                  defaultValue=""
                  name="telegram"
                  label="Telegram URL"
                  variant="outlined"
                  size="small"
                  autoComplete
                  fullWidth
                />
                <Controller
                  as={TextField}
                  control={control}
                  defaultValue=""
                  name="instagram"
                  label="Instagram URL"
                  variant="outlined"
                  size="small"
                  autoComplete
                  fullWidth
                />
              </div>
            </Fade>
          </Modal>
        </div>
        <br />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </FormGroup>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { profile: state.userProfile };
};
export default connect(mapStateToProps, { createProfile, myAccount })(
  CreateProfile
);
