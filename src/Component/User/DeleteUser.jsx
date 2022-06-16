import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./deleteUser.scss";
import { DELETE_USER } from "../../schema/users";
import { useMutation } from "@apollo/client";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4,
};

function DeleteUser({ handleClose, row, deleteID, setRefetch }) {
  // action when input true name
  const [userName, setUserName] = useState("");

  const [deleteUser, { error, loading, data }] = useMutation(DELETE_USER, {
    onCompleted: ({ deleteUser }) => {
      console.log("deleteuser::", deleteUser);
      // when click success it will close
      if (deleteUser?.status === true) {
        handleClose();
      }
    },
  });

  const handleDelete = () => {
    deleteUser({
      variables: {
        userId: deleteID,
      },
      update(_, result) {
        setRefetch();
      },
    });
  };

  return (
    <Box className="delete-user" sx={style}>
      <Stack direction="row" spacing={5}>
        <Typography className="title" variant="h6">
          Delete User
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton onClick={handleClose}>
          <ClearIcon sx={{ color: "red" }} />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={5} width="100%">
        <Typography variant="subtitle1" className="body-text">
          Are you sure?
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        width="100%"
        sx={{ mt: 4 }}
      >
        <Typography variant="subtitle1" className="body-text">
          Do you want to
        </Typography>
        <Typography className="body-void" variant="subtitle1">
          delete
        </Typography>
        <Typography variant="subtitle1" className="body-text">
          this user?
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        width="100%"
        sx={{ mb: 4 }}
      >
        <TextField
          className="text-input"
          size="small"
          fullWidth
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Please input username"
        />
      </Stack>

      <Stack direction="row" spacing={5}>
        {userName === "USER" ? (
          <Button className="btn-void" variant="outlined" fullWidth>
            Delete Now
          </Button>
        ) : (
          <Button
            variant="outlined"
            fullWidth
            className="btn-delete"
            disabled={userName === row?.user_name ? false : true}
            // if username != user_name: false else true
            sx={{
              bgcolor: userName === row?.user_name ? "#FF3F3F" : "",
              color: userName === row?.user_name ? "white" : "",
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default DeleteUser;
