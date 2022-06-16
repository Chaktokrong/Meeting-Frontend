import * as React from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import logo from "../../Assets/logoLogin.svg";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import "./menunavbar.scss";
// Icons
import Apps from "../../Assets/apps.svg";
import Comment from "../../Assets/comment-alt.svg";
import TruckLoading from "../../Assets/truck-loading.svg";
import Package from "../../Assets/package.svg";
import Boxalt from "../../Assets/box-alt.svg";
import User from "../../Assets/user.svg";
import Users from "../../Assets/users.svg";
import Signal from "../../Assets/signal-alt-2.svg";
import Calendar from "../../Assets/calendar.svg";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  height: "100%",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "0px",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MenuNavbar({ open, handleDrawerClose }) {
  let location = useLocation();
  const theme = useTheme();

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        className={
          theme.palette.mode === "dark" ? "drawer-menu-dark" : "drawer-menu"
        }
      >
        <DrawerHeader sx={{ mt: 3, mb: 3 }}>
          <IconButton className="drawerheader" onClick={handleDrawerClose}>
            <img src={logo} alt="logo" height="60%" width="60%" />
          </IconButton>
        </DrawerHeader>

        <List className="list">
          {/* Item */}
          <ListItem
            className={
              theme.palette.mode === "dark" &&
              location.pathname === "/dashboard"
                ? "list-item-active"
                : "list-item"
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItemButton
                className={
                  location.pathname === "/dashboard"
                    ? "list-item-button-active"
                    : "list-item-button"
                }
                sx={{ px: 2.5 }}
              >
                <ListItemIcon
                  className={
                    location.pathname === "/dashboard"
                      ? "list-item-icon-active"
                      : "list-item-icon"
                  }
                >
                  <img src={Apps} />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary={"Dashboard"}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Item */}

          {/* Item */}
          <ListItem
            className={
              theme.palette.mode === "dark" && location.pathname === "/calendar"
                ? "list-item-active"
                : "list-item"
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <Link to="/calendar" style={{ textDecoration: "none" }}>
              <ListItemButton
                className={
                  location.pathname === "/calendar"
                    ? "list-item-button-active"
                    : "list-item-button"
                }
                sx={{ px: 2.5 }}
              >
                <ListItemIcon
                  className={
                    location.pathname === "/calendar"
                      ? "list-item-icon-active"
                      : "list-item-icon"
                  }
                >
                  <img src={Calendar} />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary={"Calendar"} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Item */}

          {/* Item */}
          <ListItem
            className={
              theme.palette.mode === "dark" && location.pathname === "/team"
                ? "list-item-active"
                : "list-item"
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <Link to="/team" style={{ textDecoration: "none" }}>
              <ListItemButton
                className={
                  location.pathname === "/team"
                    ? "list-item-button-active"
                    : "list-item-button"
                }
                sx={{ px: 2.5 }}
              >
                <ListItemIcon
                  className={
                    location.pathname === "/team"
                      ? "list-item-icon-active"
                      : "list-item-icon"
                  }
                >
                  <img src={Users} />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary={"Teams"} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Item */}

          {/* Item */}
          <ListItem
            className={
              theme.palette.mode === "dark" && location.pathname === "/user"
                ? "list-item-active"
                : "list-item"
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <Link to="/user" style={{ textDecoration: "none" }}>
              <ListItemButton
                className={
                  location.pathname === "/user"
                    ? "list-item-button-active"
                    : "list-item-button"
                }
                sx={{ px: 2.5 }}
              >
                <ListItemIcon
                  className={
                    location.pathname === "/user"
                      ? "list-item-icon-active"
                      : "list-item-icon"
                  }
                >
                  <img src={User} />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary={"Users"} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Item */}

          {/* Item */}
          <ListItem
            className={
              theme.palette.mode === "dark" && location.pathname === "/report"
                ? "list-item-active"
                : "list-item"
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <Link to="/report" style={{ textDecoration: "none" }}>
              <ListItemButton
                className={
                  location.pathname === "/report"
                    ? "list-item-button-active"
                    : "list-item-button"
                }
                sx={{ px: 2.5 }}
              >
                <ListItemIcon
                  className={
                    location.pathname === "/report"
                      ? "list-item-icon-active"
                      : "list-item-icon"
                  }
                >
                  <img src={Signal} />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary={"Report"} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Item */}
        </List>

        <Box sx={{ flexGrow: 1 }}></Box>

        <List className="list">
          {/* Item */}
          <ListItem
            className={
              theme.palette.mode === "dark" &&
              location.pathname === "/system-setting"
                ? "list-item-active"
                : "list-item"
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <ListItemButton
                className={
                  location.pathname === "/system-setting"
                    ? "list-item-button-active"
                    : "list-item-button"
                }
                sx={{ px: 2.5 }}
              >
                <ListItemIcon
                  className={
                    location.pathname === "/system-setting"
                      ? "list-item-icon-active"
                      : "list-item-icon"
                  }
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary={"Report"} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Item */}
        </List>

        {/* <Divider /> */}
      </Drawer>
    </>
  );
}
