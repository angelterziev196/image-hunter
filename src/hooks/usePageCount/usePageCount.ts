import { useState } from 'react';
import { PageCount } from './types';

export const usePageCount = (): PageCount => {
  const [pageToShow, setPageToShow] = useState<number>(1);

  const handlePageCount = (numberOfPages: number): void => {
    setPageToShow(numberOfPages);
  };

  return { pageToShow, handlePageCount };
};
