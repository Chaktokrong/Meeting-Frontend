import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Outlet } from "react-router-dom";
import MenuNavbar from "../Component/Menu/MenuNavbar";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default function Layout({ prefersDarkMode, setPrefersDarkMode }) {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* <AppBar          
            sx={{boxShadow: "none"}}
            position="fixed" 
            open={open}
        >                            
            <TopNavbar 
                prefersDarkMode={prefersDarkMode} 
                setPrefersDarkMode={setPrefersDarkMode} 
                handleDrawerOpen={handleDrawerOpen} 
                open={open}
            />             
        </AppBar> */}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <MenuNavbar open={open} handleDrawerClose={handleDrawerClose} />
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        <Outlet />
      </Main>
    </Box>
  );
}
