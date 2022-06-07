import axios from 'axios';

export const setupAxios = () => {
  axios.defaults.baseURL = 'http://localhost:3000/api';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
};
