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
           <CardMedia
        style={{ height: 350 }}
        image={beer.image_url}
        title={beer.name}
      />
          <CardContent style={{backgroundColor:"#F28304"}}>
            <Typography gutterBotton variant="h5">{beer.name}</Typography>
            <Box display="flex-wrap" justifyContent="space-between" my={2} alignItems="center">
            </Box>
          <Box display="flex" justifyContent="space-between">
          <Typography component="legend">city</Typography>
          <Typography gutterBottom variant="subtitle1">
            {beer.city}
          </Typography>
        </Box>
          </CardContent>
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