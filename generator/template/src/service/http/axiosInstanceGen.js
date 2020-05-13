import axios from 'axios';

const baseUrl = process.env.BASE_URL;
const token = localStorage.getItem('authorization');

const instanceGen = () =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      authorization: token,
    },
    validateStatus: status => status >= 200 && status < 300,
  });

export default instanceGen;
