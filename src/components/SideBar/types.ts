import { ChangeEvent } from 'react';

export interface SideBarTypes {
  handleFilter: () => void;
  onLandscapeChange: (value: string) => void;
  onColorChange: (value: string) => void;
}

export interface FilterHook {
  handleOrientationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  applyFilter: () => void;
}
