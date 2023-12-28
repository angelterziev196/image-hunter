import { ChangeEvent } from 'react';

export interface InputTypes {
  onSearch: (value: string) => void;
  setInputValue: (inputValue: string) => void;
  inputValue: string;
}

export interface HandleInput {
  handleSearchUpdate: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputSearch: () => void;
}
