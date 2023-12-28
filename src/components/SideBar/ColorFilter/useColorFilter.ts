import { useState } from 'react';
import { ColorFilters, Colors, HandleColor } from './types';

export const useColorFilter = ({ colorChange }: ColorFilters): HandleColor => {
  const [activeIndex, updateActiveIndex] = useState<number>(-1);
  const handleColorChange = (color: string): void => {
    colorChange(color);
  };

  const handleColorClick = ({ index, color }: Colors): void => {
    updateActiveIndex(index);
    handleColorChange(color);
  };
  return { handleColorClick, activeIndex };
};
