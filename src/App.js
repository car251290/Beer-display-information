import React, {useEffect, useState } from 'react';
import { Grid,Card, CardContent,Typography,Box} from '@material-ui/core';
import Header from './componets/Header/header';
import Beers from './componets/Beer/beers';
import './styles/style.css';
import './App.css'
import {  getBeerData } from './componets/Api/index';
import useStyles from './styles/style';
const App = () => {
  const classes = useStyles();
  const [beers, setbeers] = useState([])
 
 useEffect (() => {
   let beers = true;
   getBeerData()
   .then(items => {
     if(beers){
       setbeers(items)
     }
   })
   return () => beers = false;
   
 },[]);
  
    return (
    <>
    <cssBaseline/>
     <Header />
        <Card elevation={6} display="flex">
          <CardContent style = {{backgroundColor:"#F28304"}}>
        {beers.map(items => 
          <Grid tem xs={12}>
            {items.name}
          </Grid> )}
          <Box display="flex" justifyContent="space-between">
          <Typography component="legend">description</Typography>
          <Typography gutterBottom variant="subtitle1">
            {beers.map(items => (items.description))}
          </Typography>
        </Box>
       </CardContent>
        </Card>
  
    </>
    );
  
};

export default App;