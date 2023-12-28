import { ChangeEvent } from 'react';

export interface Sorting {
  onHandleSorting: (value: string) => void;
}

export interface SortingHook {
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
