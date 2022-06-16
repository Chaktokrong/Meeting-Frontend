import * as React from 'react';
import Box from '@mui/material/Box';
//componet
import MenuNavbar from "../Component/Menu/MenuNavbar";
import TopNavbar from "../Component/Menu/TopNavbar";
import { Outlet } from 'react-router-dom';


export default function Layout({prefersDarkMode, setPrefersDarkMode }) {

  const [open, setOpen] = React.useState(false);
        
  const handleDrawerClose = () => {
      setOpen(false);
  };

  const handleDrawerOpen = () => {
      setOpen(true);
  }

  return (
    <Box sx={{ display: 'flex' }}>            
      <MenuNavbar open={open} />
      <Box component="main" sx={{ flexGrow: 1 }}>
            <TopNavbar prefersDarkMode={prefersDarkMode} setPrefersDarkMode={setPrefersDarkMode}/>
            <Box sx={{ paddingRight: 6 , paddingLeft: 6 , paddingBottom: 3 , paddingTop: 3 }}>
                <Outlet />    
            </Box>     
      </Box>
    </Box>
  );
}