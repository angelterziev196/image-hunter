import { PageClicks, Pages, SelectItem } from './types';

export const usePagination = ({ totalPages, handleClick }: Pages): PageClicks => {
  const allPages = Math.ceil(totalPages);

  const handlePageClick = (selectedItem: SelectItem): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleClick(selectedItem.selected + 1);
  };

  return { allPages, handlePageClick };
};
