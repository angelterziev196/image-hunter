import { ButtonTypes } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, onClick }: ButtonTypes): JSX.Element => (
  <button
    onClick={onClick}
    className="rounded-sm
    text-silverChalice
    py-1
    px-2
    hover:text-malibu">
    {<FontAwesomeIcon icon={icon} />}
  </button>
);

export default Button;
