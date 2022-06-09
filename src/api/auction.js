import axios from 'axios';

export const addNewAuction = async (userId, payload) => {
  return axios.post(`/auction/user/${userId}`, payload);
};

export const getAllAuctions = async () => {
  return axios.get('/auction');
};

export const getAuctionById = async (auctionId) => {
  return axios.get(`/auction/${auctionId}`);
};

export const getAllAuctionsByCategoryIdAndQuery = async (
  categoryId,
  query = 'default'
) => {
  return axios.get(`/auction/category-id/${categoryId}?auction-type=${query}`);
};
