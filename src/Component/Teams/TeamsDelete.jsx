import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./teamsdelete.scss";

function DeleteSupplies({ handleCloseDel }) {
  const [valueVoid, setValueVoid] = React.useState("");

  return (
    <Box className="delete-supplies">
      <Stack direction="row" spacing={5}>
        <Typography className="title" variant="h6">
          លុបការផ្គត់ផ្គង់
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton onClick={handleCloseDel}>
          <ClearIcon sx={{ color: "#2AEA00" }} />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={5} width="100%">
        <Typography variant="subtitle1" className="body-text">
          តើអ្នកចង់លុបការផ្គត់ផ្គង់នេះទេ?
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        width="100%"
        sx={{ mt: 2 }}
      >
        <Typography variant="subtitle1" className="body-text">
          សូមវាយពាក្យ
        </Typography>
        <Typography className="body-void" variant="subtitle1">
          supplies
        </Typography>
        <Typography variant="subtitle1" className="body-text">
          ដើម្បីលុប
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        width="100%"
        sx={{ mb: 3 }}
      >
        <TextField
          size="small"
          fullWidth
          onChange={(e) => setValueVoid(e.target.value)}
        />
      </Stack>

      <Stack direction="row" spacing={5}>
        {valueVoid === "SUPPLIES" ? (
          <Button
            sx={{ ":hover": { backgroundColor: "red", border: "none" } }}
            className="btn-void"
            variant="outlined"
            fullWidth
          >
            {" "}
            លុបឥលូវ{" "}
          </Button>
        ) : (
          <Button variant="outlined" fullWidth>
            {" "}
            លុប{" "}
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default DeleteSupplies;
