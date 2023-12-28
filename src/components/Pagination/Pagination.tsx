import ReactPaginate from 'react-paginate';
import React from 'react';
import { Pages } from './types';
import { usePagination } from './usePagination';

const Pagination = ({ totalPages, handleClick }: Pages): JSX.Element => {
  const { allPages, handlePageClick } = usePagination({ totalPages, handleClick });

  return (
    <div className="mt-[50px]">
      <ReactPaginate
        className="flex justify-center flex-row font-bold text-lg text-malibu items-center"
        pageClassName="m-1 text-center border rounded-sm transition-transform hover:border-malibu hover:shadow-lg hover:scale-105"
        pageLinkClassName="p-2"
        previousClassName="mr-5 hidden transition-transform md:block hover:scale-105"
        nextClassName="ml-5 hidden transition-transform md:block hover:scale-105"
        activeClassName="scale-110 rounded-sm bg-malibu text-white"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        pageCount={allPages}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
