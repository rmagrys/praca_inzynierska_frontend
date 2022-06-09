import axios from 'axios';

export const getS3saveLink = async (payload) => {
  return axios.post('/s3', payload);
};

export const savePicture = async (awsS3link, payload, headers) => {
  return fetch(awsS3link, {
    method: 'PUT',
    body: payload,
    headers: {
      'Content-type': payload.type,
      ...headers,
    },
  });
};
