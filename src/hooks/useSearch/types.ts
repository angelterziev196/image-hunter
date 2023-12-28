import { Filter } from '../../types/filters';
import { Sorting } from '../../types/sorter';
import { Dispatch, SetStateAction } from 'react';
import { UnsplashTypes } from '../../types/unsplashImage';

export interface Search {
  filterValues: Filter;
  sorterValues: Sorting;
  pageToShow: number;
}

export interface SearchReturn {
  handleSearch: () => Promise<void>;
  setInputValue: Dispatch<SetStateAction<string>>;
  images: UnsplashTypes[];
  pageCount: number;
  inputValue: string;
  totalElements: number;
}
