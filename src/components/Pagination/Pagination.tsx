// @ts-nocheck
import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type PProps = {
  /**
   * current page
   */
  currentPage: number;
  /**
   * total pages
   */
  totalSize: number;
  /**
   * total items on single page
   */
  sizePerPage: number;
  /**
   * show first and last pages or not
   */
  showFirstLastPages: boolean;
  /**
   * first page text
   */
  firstPageText: string;
  /**
   * last page text
   */
  lastPageText: string;
  /**
   * previous page text
   */
  previousPageText: string;
  /**
   * next page text
   */
  nextPageText: string;
  /**
   * theme
   */
  theme: string;
  /**
   * number of pages next to active page
   */
  numberOfPagesNextToActivePage: number;
  // /**change current page */
  // changeCurrentPage: () => void;
};
const Page = (props: any) => {
  const { className, label, pageNum } = props;
  return (
    <li
      className={cs(className)}
      onClick={() => props.changeCurrentPage(pageNum)}
    >
      <span>{label}</span>
    </li>
  );
};
const Paginate = (props: any) => {
  var { currentPage, numberOfPagesNextToActivePage, pageNum } = props;
  let pageToShow = 8,
    current = currentPage,
    last = pageNum,
    delta = numberOfPagesNextToActivePage,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithEllipsis = [],
    l = undefined,
    isEllipsisIncludes = false;
  // if (left + right < pageToShow) {
  //   if (left < right) {
  //     right += pageToShow - left - right;
  //   } else if (right < left) {
  //     left += pageToShow - left - right;
  //   }
  // }
  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }
  console.log(range);
  for (let i of range) {
    if (l && i - l !== 1) {
      rangeWithEllipsis.push(
        <li key={isEllipsisIncludes ? -1 : 0} className={cs('pageElli')}>
          <span> . . .</span>
        </li>,
      );
      isEllipsisIncludes = true;
    }
    rangeWithEllipsis.push(
      <li
        key={i}
        className={cs(currentPage === i ? 'is-active' : 'page')}
        onClick={e => {
          e.preventDefault();
          props.changeCurrentPage(i);
        }}
      >
        <span>{i}</span>
      </li>,
    );
    l = i;
  }
  return rangeWithEllipsis;
};

const Pagination = (props: PProps) => {
  const {
    theme,
    totalSize,
    sizePerPage,
    currentPage,
    showFirstLastPages,
    firstPageText,
    lastPageText,
    previousPageText,
    nextPageText,
  } = props;
  let totalItem = totalSize ? totalSize : 10;
  let itemPerPage = sizePerPage ? sizePerPage : 20;
  let pageNum = Math.ceil(totalItem / itemPerPage);
  return (
    <div>
      <div className={cs(`react-pagination-js-${theme}`)}>
        <ul>
          {showFirstLastPages && (
            <Page
              {...props}
              className={cs('page', currentPage === 1 ? 'disabled' : '')}
              label={firstPageText}
              pageNum={1}
            />
          )}
          <Page
            {...props}
            className={cs('page', currentPage === 1 ? 'disabled' : '')}
            label={previousPageText}
            pageNum={currentPage - 1}
          />

          <Paginate {...props} pageNum={pageNum} />
          <Page
            {...props}
            className={cs('page', currentPage === pageNum ? 'disabled' : '')}
            label={nextPageText}
            pageNum={currentPage + 1}
          />
          {showFirstLastPages && (
            <Page
              {...props}
              className={cs('page', currentPage === pageNum ? 'disabled' : '')}
              label={lastPageText}
              pageNum={pageNum}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  theme: 'default',
  currentPage: 1,
  totalSize: 10,
  sizePerPage: 20,
  numberOfPagesNextToActivePage: 3,
  showFirstLastPages: false,
  lastPageText: '»',
  firstPageText: '«',
  nextPageText: '⟩',
  previousPageText: '⟨',
};

export default Pagination;
