import { customFetch } from './axios';

export const getVans = async () => {
  const { data } = await customFetch.get('/vans');
  return data;
};
