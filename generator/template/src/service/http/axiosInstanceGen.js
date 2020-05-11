import axios from 'axios';

const baseUrl = process.env.BASE_URL;

const instanceGen = () =>
  axios.create({
    baseURL: baseUrl,
    validateStatus: status => status >= 200 && status < 300,
  });

export default instanceGen;
