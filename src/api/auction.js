import axios from 'axios';

export const addNewAuction = async (userId, payload) => {
  return axios.post(`/auction/user/${userId}`, payload);
};

export const getAllAuctions = async () => {
  return axios.get('/auction');
};

export const getAuction = async (auctionId) => {
  return axios.get(`/auction/${auctionId}`);
};
