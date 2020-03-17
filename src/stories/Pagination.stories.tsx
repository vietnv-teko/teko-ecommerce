import React, { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChanged = (numPage: number) => {
    setCurrentPage(numPage);
  };

  return (
    <div>
      <Pagination
        totalRecords={1000}
        pageLimit={20}
        pageNeighbours={2}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
};
