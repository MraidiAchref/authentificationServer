import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./ButtonAppBarStyle.css"

export default function ButtonAppBar() {
  return (

      <AppBar className='app-bar' >
        <Toolbar>
          <IconButton className="menu-icon-button">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      
   
  );
}