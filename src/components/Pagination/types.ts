export interface Pages {
  totalPages: number;
  handleClick: (value: number) => void;
}

export interface PageClicks {
  allPages: number;
  handlePageClick: (selected: SelectItem) => void;
}

export interface SelectItem {
  selected: number;
}
