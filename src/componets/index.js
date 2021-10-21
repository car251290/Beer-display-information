import axios from "axios";

export const getBeerData = async () => {
    return fetch('https://api.punkapi.com/v2/beers')
      .then(data => data.json())   
}

 //' https://api.openbrewerydb.org/breweries'
  //constructor() {
    //super();

   // this.state = {
    //  beers: []
   // }
 // }

 // componentDidMount() {
   // fetch('https://api.punkapi.com/v2/beers').then((response) => {
     // return response.json();
    //}).then((data) => {
      //console.log(data);
      //this.setState({
        //beers: data
      //})
    //})
 // }