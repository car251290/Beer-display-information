import React, { Component, createRef, useEffect, useState } from 'react';
//import '../styles/style.css'
import { Typography,Card, CardContent,Box,CardMedia} from '@material-ui/core';
import useStyles from './style';
import index from '../Api/index'

const Beers = ({items}) => {
const [thebeers, setthebeers] = useState([])

useEffect( () => {
  setthebeers( (refs) => Array(items.length).map((_,i) => refs[i] || createRef()));
},[items])
      return (
        <Card elevation={6}
        title={items.name}
        display="flex"
        >
        <CardContent style={{backgroundColor:"#F28304"}}>
            <Typography gutterBotton variant="h5">{items.name}</Typography>
            <Box display="flex-wrap" justifyContent="space-between" my={2} alignItems="center">
            </Box>

          <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Beer description</Typography>
          <Typography gutterBottom variant="subtitle1">
            {items.description}
          </Typography>
        </Box>
        
          </CardContent>
        </Card>
      )
}

export default Beers;