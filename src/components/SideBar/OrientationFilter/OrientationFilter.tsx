import { orientations } from '../../../config/constants';
import { OrientationFilters } from './types';

const OrientationFilter = ({ orientationChange }: OrientationFilters): JSX.Element => (
  <div className="p-4 pl-6 border-b border-silverChalice">
    <div className="mb-3 text-lg">
      <span>Orientation:</span>
    </div>

    {orientations.map((orientation, index) => (
      <div key={index} className="mb-2 pl-2">
        <input
          onChange={orientationChange}
          className="mr-2"
          type="radio"
          id={orientation}
          name="radioBox"
          value={orientation}
        />
        <label className="capitalize" htmlFor={orientation}>
          {orientation}
        </label>
      </div>
    ))}
  </div>
);

export default OrientationFilter;
