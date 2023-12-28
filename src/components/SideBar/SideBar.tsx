import { SideBarTypes } from './types';
import ColorFilter from './ColorFilter/ColorFilter';
import OrientationFilter from './OrientationFilter/OrientationFilter';
import { useSideBar } from './useSideBar';

const SideBar = ({ handleFilter, onLandscapeChange, onColorChange }: SideBarTypes): JSX.Element => {
  const { handleOrientationChange, applyFilter } = useSideBar({
    handleFilter,
    onLandscapeChange,
    onColorChange
  });

  return (
    <div className="w-full sm:mx-0 mx-auto bg-white">
      <div className="border dark:bg-ebonyClay dark:text-white rounded-sm border-silverChalice">
        <div className="text-xl p-3 border-b border-silverChalice">
          <span>Filters</span>
        </div>

        <OrientationFilter orientationChange={handleOrientationChange} />

        <ColorFilter colorChange={onColorChange} />

        <div className="px-4 py-3 text-center">
          <button
            onClick={applyFilter}
            className="
              mx-auto
              border
              border-malibu
              rounded-md
              px-14
              py-1
              font-semibold
              text-malibu
              hover:bg-malibu
              hover:text-white
              transition-all">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
