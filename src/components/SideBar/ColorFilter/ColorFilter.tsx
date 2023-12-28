import { colors } from '../../../config/constants';
import { ColorFilters } from './types';
import { useColorFilter } from './useColorFilter';

const ColorFilter = ({ colorChange }: ColorFilters): JSX.Element => {
  const { handleColorClick, activeIndex } = useColorFilter({ colorChange });

  return (
    <div className="p-4 pl-6 border-b border-silverChalice">
      <div className="mb-3 text-lg">Color:</div>

      <div className="flex pl-2">
        {colors.map((color, index) => {
          const styles = {
            background: color,
            borderColor: color === 'white' ? 'black' : color
          };

          const handleClick = (): void => handleColorClick({ index, color });

          return (
            <button
              key={index}
              onClick={handleClick}
              style={styles}
              type="button"
              value={color}
              className={`
                w-[20px]
                h-[20px]
                text-[0px]
                rounded-sm
                border-2
                mr-3
                cursor-pointer
                transition-transform
                ${activeIndex === index ? 'transform rotate-45' : ''}
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorFilter;
