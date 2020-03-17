import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type PProps = {
  /**
   * total records
   */
  totalRecords: number;
  /**
   * page limit
   */
  pageLimit: number;
  /**
   * page neightbours
   */
  pageNeighbours: number;
  /**
   * action when page changed
   */
  onPageChanged: (pageNum: number) => void;
  /**
   * current page
   */
  currentPage: number;
};

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from: any, to: any, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = ({
  totalRecords = 0,
  pageLimit = 30,
  pageNeighbours = 0,
  onPageChanged,
  currentPage,
}: PProps) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const gotoPage = (page: number) => {
    onPageChanged(page);
  };

  const handleClick = (page: any, e: any) => {
    e.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (e: any) => {
    e.preventDefault();
    gotoPage(currentPage - 1);
  };

  const handleMoveRight = (e: any) => {
    e.preventDefault();
    gotoPage(currentPage + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };
  let pages = fetchPageNumbers();
  return pages.length > 0 ? (
    <nav aria-label="Countries Pagination">
      <ul className={cs('pagination')}>
        <li
          key="previous"
          className={cs(
            'page-item',
            'pagination-nav-btn',
            currentPage === 1 ? 'disabled' : '',
          )}
        >
          <div
            className={cs('page-link')}
            aria-label="Previous"
            onClick={handleMoveLeft}
          >
            &laquo;
          </div>
        </li>
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={index} className={cs('page-item', 'dot-item')}>
                <div className={cs('page-link')} aria-label="Previous">
                  ...
                </div>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index} className={cs('page-item', 'dot-item')}>
                <div className={cs('page-link')} aria-label="Next">
                  ...
                </div>
              </li>
            );

          return (
            <li
              key={index}
              className={cs(
                'page-item',
                `${currentPage === page ? 'active' : ''}`,
              )}
            >
              <div
                className={cs('page-link')}
                onClick={e => handleClick(page, e)}
              >
                {page}
              </div>
            </li>
          );
        })}
        <li
          key="next"
          className={cs(
            'page-item',
            'pagination-nav-btn',
            currentPage === totalPages ? 'disabled' : '',
          )}
        >
          <div
            className={cs('page-link')}
            aria-label="Previous"
            onClick={handleMoveRight}
          >
            &raquo;
          </div>
        </li>
      </ul>
    </nav>
  ) : null;
};
export default Pagination;
