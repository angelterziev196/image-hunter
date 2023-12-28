import { SideBarTypes } from './types';
import { ChangeEvent } from 'react';
import { FilterHook } from './types';

export const useSideBar = ({ handleFilter, onLandscapeChange }: SideBarTypes): FilterHook => {
  const handleOrientationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    onLandscapeChange(value);
  };

  const applyFilter = (): void => {
    handleFilter();
  };

  return { handleOrientationChange, applyFilter };
};
