import { ChangeEvent } from 'react';
import { SortingHook, Sorting } from './types';

export const useSortingMenu = ({ onHandleSorting }: Sorting): SortingHook => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    onHandleSorting(value);
  };

  return { handleChange };
};
