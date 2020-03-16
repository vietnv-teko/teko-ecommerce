// @ts-nocheck
import React, { useState } from 'react';
import Pagination from './Pagination';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Pagination',
  component: Pagination,
};

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const changeCurrentPage = (numPage: number) => {
    action('change current page');
    setCurrentPage(numPage);
  };
  return (
    <Pagination
      currentPage={currentPage}
      totalSize={100}
      sizePerPage={10}
      changeCurrentPage={changeCurrentPage}
      theme="default"
    />
  );
};
