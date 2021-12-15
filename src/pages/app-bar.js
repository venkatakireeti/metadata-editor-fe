import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function MetadataAppBar(props) {

    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        history.replace("/");
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MetadataList
          </Typography>
          {props.user ? <div> <Typography variant="h6" component="div">
            {props.user}
          </Typography>           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logout"
            sx={{ mr: 2 }}
          >
            <LogoutIcon onClick={handleLogout}/>
          </IconButton></div> : <Button color="inherit" href={props.url}>Login</Button> }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
