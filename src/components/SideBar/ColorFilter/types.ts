export interface ColorFilters {
  colorChange: (value: string) => void;
}

export interface Colors {
  index: number;
  color: string;
}

export interface HandleColor {
  handleColorClick: ({ index, color }: Colors) => void;
  activeIndex: number;
}
