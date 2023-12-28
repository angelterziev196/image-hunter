import { useState } from 'react';
import { Sorting } from '../../types/sorter';
import { SorterChange } from './types';

export const useSorterChange = (): SorterChange => {
  const [sorterValues, setSorterValues] = useState<Sorting>({} as Sorting);

  const handleSorterChanges = (value: string): void => {
    setSorterValues((prevSorterValues: Sorting) => ({
      ...prevSorterValues,
      order_by: value
    }));
  };

  return { sorterValues, handleSorterChanges };
};
