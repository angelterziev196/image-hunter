import { HeaderProps } from './types';
import logo from '../../static/images/logo.png';

const Header = ({ text }: HeaderProps): JSX.Element => (
  <div
    className="
    relative
    py-5
    bg-hero-background
    bg-cover
    bg-center
    before:content-[''] 
    before:absolute
    before:w-full
    before:h-full 
    before:top-0 
    before:left-0 
    before:right-0 
    before:bg-heroColor
    dark:before:bg-darkHeroBackground">
    <div className="max-w-1300 px-4 mx-auto">
      <div className="max-w-300 flex justify-between items-center">
        <div className="flex flex-row z-[5] items-center">
          <div className="max-w-100">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <a href="/">
            <h2 className="text-white ml-5 text-2xl">{text}</h2>
          </a>
        </div>
      </div>

      <div
        className="max-w-600
        z-[10]
        relative
        text-white
        px-5
        my-100
        mt-md-200">
        <h2 className="text-3xl mb-5">Description</h2>
        <p className="md:text-xl text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis placerat dui,
          eget finibus elit. Donec faucibus nibh sed dolor ultrices, sed venenatis sem volutpat. Sed
          ut aliquam lectus, eu eleifend leo. Phasellus non justo nisi. Sed enim quam, convallis id
          mollis eget, placerat vel elit. Phasellus sodales laoreet orci, ac ultrices magna faucibus
          a. Nam maximus leo eu ex hendrerit placerat.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
