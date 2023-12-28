import { CardTypes } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCard } from './useCard';

const ImageCard = ({ imageSrc, description, author, likes }: CardTypes): JSX.Element => {
  const { openUrl } = useCard({ imageSrc });

  return (
    <div
      onClick={openUrl}
      className="relative inline-block rounded-xl shadow-xl dark:shadow-lg dark:shadow-silverChaliceTransparent dark:bg-ebonyClay pb-[60px] transition-transform cursor-pointer hover:scale-105">
      <div
        style={{ backgroundImage: `url(${imageSrc})` }}
        className="rounded-t-xl overflow-hidden mb-4 h-48 bg-cover bg-center"></div>
      <div className="text-black dark:text-white p-3">
        <div>
          <h3 className="text-2xl mb-3 font-bold">{author}</h3>
          <div className="overflow-auto max-h-24">
            <p className="font-medium">{description}</p>
          </div>
        </div>

        <div className=" flex absolute bottom-[12px] left-[12px] items-center bg-wildRed rounded-md p-2 text-white">
          <FontAwesomeIcon className="mr-2" icon={faHeart} />
          <span className="text-base font-semibold">{likes}</span>
        </div>
      </div>
    </div>
  );
};
export default ImageCard;
