import axios from 'axios';

const nasaApiInstance = axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
});

export default nasaApiInstance;
