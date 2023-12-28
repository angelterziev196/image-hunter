import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from './useTheme';

const Switcher = (): JSX.Element => {
  const { colorTheme, setTheme } = useTheme();
  const isDarkMode = colorTheme === 'light';

  const toggleDarkMode = (): void => {
    setTheme(colorTheme);
  };

  return (
    <div className="inline-block z-[5] dark:shadow-silverChaliceTransparent fixed bottom-[20px] bg-ebony rounded-md right-[20px] p-2 3text-center">
      <DarkModeSwitch
        className="mx-auto text-white"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={40}
      />
    </div>
  );
};

export default Switcher;
