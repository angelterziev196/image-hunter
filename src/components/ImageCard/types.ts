export type UrlOpenArgument = Pick<CardTypes, 'imageSrc'>;

export interface CardTypes {
  imageSrc: string;
  description: string;
  author: string;
  likes: number;
}

export interface UrlOpen {
  openUrl: () => void;
}
