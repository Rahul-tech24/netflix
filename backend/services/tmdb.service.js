import axios from "axios";
import { TMDB_API_KEY } from "../config/envVars.js";


// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//     .catch(err => console.error(err));
  
export const fetchFromTMDB = async (url) => {

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`
  }
    };
    
    const response = await axios.get(url, options);

    if (response.status !== 200) {
        throw new Error(`Failed to fetch from TMDB: ${response.statusText}`);
    }

    return response.data;


};