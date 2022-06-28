import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core';
import useStyles from './style';
const Header = () => {
  const classes = useStyles();
    return (
      <AppBar position ="static">
        <Toolbar className={classes.toolbar}>
        <Typography variant= "h5" className={classes.title}>
           Beer Information
        </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Header;
