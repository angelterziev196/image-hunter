import { HandleInput, InputTypes } from './types';
import { ChangeEvent } from 'react';

export const useInput = ({ onSearch, setInputValue, inputValue }: InputTypes): HandleInput => {
  const handleSearchUpdate = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleInputSearch = (): void => {
    onSearch(inputValue);
  };
  return { handleSearchUpdate, handleInputSearch };
};
