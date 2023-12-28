import { UrlOpen, UrlOpenArgument } from './types';

export const useCard = ({ imageSrc }: UrlOpenArgument): UrlOpen => {
  const openUrl = (): void => {
    window.open(imageSrc);
  };

  return { openUrl };
};
