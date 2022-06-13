import axios from 'axios';

export const getAuthToken = async (payload) => {
  return axios.post(`/login`, payload);
};
