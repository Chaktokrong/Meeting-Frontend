import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import "./teamsuppliesadd.scss";
import { CREATE_TEAM } from "../../schema/team.js";
import { useMutation } from "@apollo/client";

export default function SuppliesAdd({ handleClose }) {
  const [createTeam] = useMutation(CREATE_TEAM, {
    onCompleted: ({ createTeam }) => {
      console.log(createTeam.success, "success");
    },
    onError: ({ error }) => {
      console.log(error.message, "error");
    },
  });

  const AddTeams = Yup.object().shape({
    title: Yup.string().required("The title field is required"),
    description: Yup.string().required("The description field is required"),
    image_name: Yup.string(),
    image_src: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      // image_name: "",
      // image_src: "",
    },

    validationSchema: AddTeams,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("value::", values);
      createTeam({
        variables: {
          input: {
            ...values,
          },
        },
      });
    },
  });

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

  const Input = styled("input")({
    display: "none",
  });

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box spacing={5} className="supplies">
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" className="title">
              {" "}
              Create Team{" "}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton onClick={handleClose}>
              <ClearIcon sx={{ color: "red" }} />
            </IconButton>
          </Stack>

          {/* Profile */}

          <Grid className="title">
            <Paper className="make-paper">
              <label htmlFor="icon-button-file">
                <Input accept="image/*" type="file" />
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

          <Stack direction="column" spacing={2}>
            <Grid xs={12} md={12}>
              <Typography className="Sub-title"> Title </Typography>
              <TextField
                id="title"
                required
                size="small"
                fullWidth
                placeholder="title"
                {...getFieldProps("title")}
                error={Boolean(touched.title && errors.title)}
                helperText={touched.title && errors.title}
              />
            </Grid>

            <Grid xs={12} md={12}>
              <Typography className="Sub-title"> Leader </Typography>
              <TextField
                id="description"
                required
                size="small"
                fullWidth
                placeholder="description"
                {...getFieldProps("description")}
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
              />
            </Grid>

            <Stack direction="row" spacing={2}>
              <Button
                className="btn-create"
                variant="contained"
                fullWidth
                type="submit"
              >
                Create Team
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Form>
    </FormikProvider>
  );
}
