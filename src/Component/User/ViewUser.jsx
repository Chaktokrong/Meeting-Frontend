import * as React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./viewuser.scss";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4,
};

export default function ViewUser({ handleCloseView }) {
  return (
    <Box sx={style}>
      <Stack direction="row" spacing={2}>
        <Typography className="title" variant="h5">
          {" "}
          Information of Member
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={handleCloseView} sx={{ color: "#006fff" }}>
          <ClearIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={5}>
        <Stack direction="column" spacing={2}>
          <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <Typography className="sub-title" variant="h6">
            {" "}
            Name:{" "}
          </Typography>
          <Typography variant="p"> ប្រុស​ភឹម </Typography>
        </Stack>

        <Stack direction="column" spacing={2}>
          <Typography className="sub-title" variant="h6">
            {" "}
            Gender:{" "}
          </Typography>
          <Typography variant="p"> Male </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
