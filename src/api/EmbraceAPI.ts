import axios from 'axios';

// TODO: Setup env variables
// const BASE_URL = process.env.BASE_URL;
const BASE_URL = 'http://localhost:3100';

const embraceAPI = axios.create({
  baseURL: BASE_URL
});

export default embraceAPI;
