import { Filter } from '../types/filters';
import { Sorting } from '../types/sorter';
export interface GetImages {
  inputValue: string;
  sorterValues: Sorting;
  filterValues: Filter;
  pageToShow: number;
  setImages: (images: []) => void;
}
