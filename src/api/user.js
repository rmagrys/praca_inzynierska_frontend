import axios from 'axios';

export const getUserById = async (userId) => {
  return axios.get(`/users/${userId}`);
};

export const addNewUser = async (payload) => {
  return axios.post(`/users`, payload);
};
