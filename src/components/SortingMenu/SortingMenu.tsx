import { sortingOptions } from '../../config/constants';
import { Sorting } from './types';
import { useSortingMenu } from './useSortingMenu';

const SortingMenu = ({ onHandleSorting }: Sorting): JSX.Element => {
  const { handleChange } = useSortingMenu({ onHandleSorting });

  return (
    <div className="md:mt-5 md:ml-7">
      <label className="mr-3 dark:text-white" htmlFor="sort">
        Sort By:
      </label>
      <select
        onChange={handleChange}
        className="
          dark:bg-ebonyClay
          dark:text-white
          w-full
          py-1
          px-4
          border
          capitalize
          border-silverChalice
          rounded-sm
          font-remibold
          text-md
          md:w-[227px]
          focus:outline-silverChalice"
        name="sort"
        id="sort">
        {sortingOptions.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SortingMenu;
