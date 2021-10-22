import React, { Component, useEffect, useState } from 'react';
//import '../styles/style.css'
import { Typography,Card, CardContent,Box,CardMedia} from '@material-ui/core';
import useStyles from './style';
import index from '../Api/index'

const Beers = ({beers}) => {
const [thebeers, setthebeers] = useState([])

useEffect(()=> {
  setthebeers( (thebeers) => (beers));
},[beers])
      return (
        <Card elevation={6}
        title={beers.name}
        display="flex"
        >
        <CardContent style={{backgroundColor:"#F28304"}}>
            <Typography gutterBotton variant="h5">{beers.name}</Typography>
            <Box display="flex-wrap" justifyContent="space-between" my={2} alignItems="center">
            </Box>

          <Box display="flex" justifyContent="space-between">
          <Typography component="legend">description</Typography>
          <Typography gutterBottom variant="subtitle1">
            {beers.description}
          </Typography>
        </Box>
        
          </CardContent>
        </Card>
      )
}

export default Beers;