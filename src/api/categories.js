import axios from 'axios';

export const getAllCategories = async () => {
  return axios.get('/categories');
};
