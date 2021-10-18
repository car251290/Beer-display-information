import React, { Component } from 'react';
//import '../styles/style.css'
import { Typography,Card, CardContent,Box,CardMedia} from '@material-ui/core';
import useStyles from './style';

class Beers extends Component {
 
  render () {
   //const classes = useStyles();
    const items = this.props.beers.map((beer) => {
      
      return (
        <Card elevation={6}
        title={beer.name}
        display="flex"
        >
        <CardContent style={{backgroundColor:"#F28304"}}>
            <Typography gutterBotton variant="h5">{beer.name}</Typography>
            <Box display="flex-wrap" justifyContent="space-between" my={2} alignItems="center">
            </Box>
          <Box display="flex" justifyContent="space-between">
          <Typography component="legend">description</Typography>
          <Typography gutterBottom variant="subtitle1">
            {beer.description}
          </Typography>
        </Box>
          </CardContent>=
        </Card>
      )
    });

    return (
      <ul>
        {items}
      </ul>
    );
}
  
}

export default Beers;
