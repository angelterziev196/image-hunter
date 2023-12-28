import { useEffect, useState } from 'react';
import { getImages } from '../../services/getImages';
import { Search } from './types';
import { SearchReturn } from './types';
import { UnsplashTypes } from '../../types/unsplashImage';

export const useSearch = ({ filterValues, sorterValues, pageToShow }: Search): SearchReturn => {
  const [inputValue, setInputValue] = useState<string>('');
  const [images, setImages] = useState<UnsplashTypes[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);

  const handleSearch = async (): Promise<void> => {
    if (!inputValue.length) return;
    try {
      const response = await getImages({
        inputValue,
        filterValues,
        setImages,
        sorterValues,
        pageToShow
      });
      setPageCount(response.data.total_pages);
      setImages(response.data.results);
      setTotalElements(response.data.total);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearchEffect = (): void => {
    handleSearch();
  };

  useEffect(handleSearchEffect, [sorterValues, pageToShow]);

  return { handleSearch, setInputValue, images, pageCount, inputValue, totalElements };
};
