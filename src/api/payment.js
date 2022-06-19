import axios from 'axios';

export const addPaymentToAuction = async (auctionId, userId, payload) => {
  return axios.post(`/auction/${auctionId}/user/${userId}/payment`, payload);
};

export const getAllUserExpenses = async (userId, query) => {
  return axios.get(`payment/user/${userId}/expenses?year=${query}`);
};

export const getAllUserIncomes = async (userId, query) => {
  return axios.get(`payment/user/${userId}/incomes?year=${query}`);
};
