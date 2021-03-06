import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Profile() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
        <IconButton>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </IconButton>

        <Button
          onClick={handleClick}
          sx={{
            color: theme.palette.mode === "dark" ? "#0b82c4" : "#0b82c4",
          }}
        >
          <Stack direction="row" spacing={1}>
            <Typography>វ៉េត ស្រីមៅ</Typography>
            <KeyboardArrowDownIcon />
          </Stack>
        </Button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        {/* <MenuItem>
                    <ListItemIcon> <PersonAdd fontSize="small" /> </ListItemIcon>
                    Add another account
                </MenuItem> */}
        <MenuItem>
          <ListItemIcon>
            {" "}
            <Settings fontSize="small" />{" "}
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => navigate("/login")}>
          <ListItemIcon>
            {" "}
            <Logout fontSize="small" />{" "}
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
