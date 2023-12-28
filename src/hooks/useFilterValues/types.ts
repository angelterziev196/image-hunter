import { Filter } from '../../types/filters';

export interface FilterHook {
  filterValues: Filter;
  handleColorChange: (value: string) => void;
  handleOrientationChange: (value: string) => void;
}
