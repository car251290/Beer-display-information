import axios from "axios";

export const getBeerData = async () => {
  try {
    return fetch('https://api.punkapi.com/v2/beers')
      .then(data => data.json())  
  } catch (error) {
    return error;

  }
    
}
