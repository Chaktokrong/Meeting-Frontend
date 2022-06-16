import React from "react";
import {
  Stack,
  Grid,
  Box,
  Paper,
  Button,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import "./modaluserAdd.scss";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useFormik, Form, FormikProvider } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { CREATE_USERS } from "../../schema/users";
import { useMutation } from "@apollo/client";
import ClearIcon from "@mui/icons-material/Clear";

const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#fff",
  borderRadius: 5,
  boxShadow: 5,
  p: 4,
};

// handleClose is a props
function ModalUserAdd({ handleClose, setRefetch }) {
  //select option
  const [startDate, setStartDate] = React.useState(new Date());
  const [gender, setGender] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // createUser we get from file User.js which it from Apolo cilent
  const [createUser, { error, loading, data }] = useMutation(CREATE_USERS, {
    onCompleted: ({ createUser }) => {
      // console.log("createUser::", createUser);

      // when click if it success, it would be close
      if (createUser?.status === true) {
        handleClose();
      }
    },
  });

  // User requieds field
  const UserAdd = Yup.object().shape({
    user_name: Yup.string().required("Required"),
    mail: Yup.string().email("Invalid email.").required("Required"),
    password: Yup.string()
      .min(6, "Password must be more than 6 characters!")
      .required("Required"),
    image_name: Yup.string(),
    image_src: Yup.string(),
    position: Yup.string(),
  });

  // set default value for feld create user to be empty string
  const formik = useFormik({
    initialValues: {
      user_name: "",
      mail: "",
      password: "",
      image_name: "",
      image_src: "",
      position: "",
    },

    validationSchema: UserAdd,
    // this is a function submit
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // console.log("Value::", values);

      createUser({
        variables: {
          input: {
            ...values,
          },
        },

        // we use this when we add or delete it will auto
        update(_, result) {
          setRefetch();
        },
        // for get values
      });
    },
  });

  // formix
  const {
    errors,
    touched,
    values,
    isSubmitting,
    checkProp,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    resetForm,
  } = formik;

  return (
    <Stack className="modal-user" direction="row" spacing={2}>
      {/* <Grid container spacing={2}> */}
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box sx={style}>
            <Stack direction="row">
              <Grid item container className="title">
                Create User
              </Grid>

              <IconButton
                onClick={handleClose}
                sx={{
                  ":hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <ClearIcon
                  sx={{
                    color: "red",
                    marginRight: "-20px",
                    marginTop: "-20px",
                    ":hover": {
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50px",
                    },
                  }}
                />
              </IconButton>
            </Stack>

            <Grid item container className="title">
              <Paper className="make-paper">
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    className="icon-camara"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Paper>
            </Grid>

            <Grid item container className="title">
              Profile
            </Grid>

            <Grid item container spacing={1}>
              <Grid item xs={12} md={12} className="sub-title">
                Username:
                <TextField
                  className="text-field"
                  size="small"
                  fullWidth
                  placeholder="Username"
                  {...getFieldProps("user_name")}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>

              <Grid item xs={12} md={12} className="sub-title">
                Email:
                <TextField
                  className="select-date"
                  size="small"
                  fullWidth
                  placeholder="Email"
                  {...getFieldProps("mail")}
                  error={Boolean(touched.mail && errors.mail)}
                  helperText={touched.mail && errors.mail}
                />
              </Grid>

              <Grid item xs={12} md={12} className="sub-title">
                Password:
                <TextField
                  className="text-field"
                  type="password"
                  size="small"
                  fullWidth
                  placeholder="Password"
                  autoComplete="current-password"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>

              <Grid item xs={12} md={12} className="sub-title">
                Position:
                <TextField
                  className="text-field"
                  size="small"
                  fullWidth
                  placeholder="Position"
                  {...getFieldProps("position")}
                />
              </Grid>

              <Grid item xs={12} md={12} mt={2}>
                <Button
                  className="btn-create"
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Create Now
                </Button>
              </Grid>
            </Grid>
          </Box>
          {/* </Grid> */}
        </Form>
      </FormikProvider>
    </Stack>
  );
}

export default ModalUserAdd;
