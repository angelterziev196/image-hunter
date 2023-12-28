import { useState } from 'react';
import { FilterHook } from './types';
import { Filter } from '../../types/filters';

export const useFilterValues = (): FilterHook => {
  const [filterValues, setFilterValues] = useState<Filter>({} as Filter);

  const handleColorChange = (value: string): void => {
    setFilterValues((prevValues: Filter) => ({
      ...prevValues,
      color: value
    }));
  };

  const handleOrientationChange = (value: string): void => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      orientation: value
    }));
  };

  return { filterValues, handleColorChange, handleOrientationChange };
};
