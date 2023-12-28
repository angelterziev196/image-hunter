import axios, { AxiosResponse } from 'axios';
import { GetImages } from '../types/getImage';

export const getImages = ({
  inputValue,
  filterValues,
  pageToShow,
  sorterValues
}: GetImages): Promise<AxiosResponse> => {
  return axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`,
    {
      params: {
        query: inputValue,
        per_page: 12,
        page: pageToShow,
        ...filterValues,
        ...sorterValues
      }
    }
  );
};
