import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import "./teamsadd.scss";

export default function UpdateSupplies({ handleClose }) {
  const SuppliesUpdate = Yup.object().shape({
    name: Yup.string().required("ទាមទារឈ្មោះ!"),
    email: Yup.string().required("ទាមទារអ៊ីមែល!"),
    address: Yup.string().required("ទាមទារអាសយដ្ឋាន!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },

    validationSchema: SuppliesUpdate,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const newSupplies = {
        ...values,
      };
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

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box className="supplies">
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" className="title">
              {" "}
              Edite
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={() => handleClose()}>
              <ClearIcon sx={{ color: "red" }} />
            </IconButton>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Grid xs={12} md={12}>
              <Typography variant="body1" className="Sub-title">
                {" "}
                Title{" "}
              </Typography>
              <TextField
                id="title"
                required
                size="small"
                fullWidth
                placeholder="Title"
                {...getFieldProps("title")}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>

            <Grid xs={12} md={12}>
              <Typography variant="body1" className="Sub-title">
                {" "}
                Leander{" "}
              </Typography>
              <TextField
                id="leander"
                required
                size="small"
                fullWidth
                placeholder="Leander"
                {...getFieldProps("leander")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>

            <Grid xs={12} md={12}>
              <Typography variant="body1" className="Sub-title">
                {" "}
                Phone number{" "}
              </Typography>
              <TextField
                id="number"
                required
                size="small"
                fullWidth
                placeholder="Phone number"
                {...getFieldProps("number")}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
              />
            </Grid>

            <Grid xs={12} md={12}>
              <Typography variant="body1" className="Sub-title">
                {" "}
                Email{" "}
              </Typography>
              <TextField
                id="email"
                required
                size="small"
                fullWidth
                placeholder="email"
                {...getFieldProps("email")}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
              />
            </Grid>

            <Stack direction="row" spacing={2}>
              <Button
                className="btn-create"
                variant="contained"
                fullWidth
                onClick="submit"
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Form>
    </FormikProvider>
  );
}
