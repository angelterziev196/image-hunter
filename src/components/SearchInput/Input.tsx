import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { InputTypes } from './types';
import { useInput } from './useInput';

const SearchInput = ({ onSearch, setInputValue, inputValue }: InputTypes): JSX.Element => {
  const { handleSearchUpdate, handleInputSearch } = useInput({
    onSearch,
    setInputValue,
    inputValue
  });

  return (
    <div className="my-5">
      <div className="relative block md:inline-block">
        <input
          onChange={handleSearchUpdate}
          className="
          dark:bg-ebonyClay
          py-1
          pl-4
          pr-7
          border
          dark:text-white
          border-silverChalice
          rounded-sm
          focus:outline-silverChalice
          w-full"
          type="text"
          placeholder="Search"
        />
        <div className="absolute top-0 right-0">
          <Button icon={faSearch} onClick={handleInputSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
