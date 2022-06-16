import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack, Typography, IconButton, Modal } from "@mui/material";

//component
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

// row is a function name which we get from Modaluser.jsx

export default function UserAction({ row, setRefetch }) {
  // console.log("Row:: ", row);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEl = () => {
    setAnchorEl(null);
  };

  //Modal Update
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Modal Delete
  const [openDel, setOpenDel] = React.useState(false);
  const [deleteID, setDeleteID] = useState(null);

  const handleOpenDel = () => {
    setOpenDel(true);
    setDeleteID(row?._id);
  };

  const handleCloseDel = () => setOpenDel(false);

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon sx={{ color: "#3C64F6" }} />
      </IconButton>

      <Menu
        id="basic-button"
        anchorEl={anchorEl}
        open={openEl}
        onClose={handleCloseEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpen}>
          <Stack direction="row" spacing={2}>
            <EditIcon sx={{ color: "#0b82c4" }} />
            <Typography> Update </Typography>
          </Stack>
        </MenuItem>

        <MenuItem onClick={handleOpenDel}>
          <Stack direction="row" spacing={2}>
            <DeleteIcon sx={{ color: "red" }} />
            <Typography> Delete </Typography>
          </Stack>
        </MenuItem>
      </Menu>

      <Modal open={open} onClose={handleClose}>
        <UpdateUser
          handleClose={handleClose}
          setRefetch={setRefetch}
          row={row}
        />
      </Modal>

      <Modal open={openDel}>
        <DeleteUser
          handleClose={handleCloseDel}
          deleteID={deleteID}
          setRefetch={setRefetch}
          row={row}
        />
        {/* // use this function  handleCloseDel to use in updateUser.js in function  */}
      </Modal>
    </div>
  );
}
