import axios from 'axios';
import store from '@/store';

const baseUrl = process.env.BASE_URL;
const token = store.getters.token;

const instanceGen = (baseURL = baseUrl) =>
  axios.create({
    baseURL,
    headers: {
      authorization: token,
    },
    validateStatus: status => status >= 200 && status < 300,
  });

export default instanceGen;
