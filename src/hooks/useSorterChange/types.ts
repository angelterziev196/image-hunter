import { Sorting } from '../../types/sorter';

export interface SorterChange {
  sorterValues: Sorting;
  handleSorterChanges: (value: string) => void;
}
