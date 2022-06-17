import axios from 'axios';

export const addNewBidToAuction = async (userId, auctionId, payload) => {
  return axios.post(`/bid/user/${userId}/auction/${auctionId}`, payload);
};

export const getAllUserBids = async (userId) => {
  return axios.get(`/bid/user/${userId}`);
};

export const getAllUserBidsByCategoryWithIncludables = async (
  userId,
  categoryId,
  auctionType = 'default'
) => {
  return axios.get(
    `/bid/user/${userId}/category/${categoryId}?auction-type=${auctionType}`
  );
};
