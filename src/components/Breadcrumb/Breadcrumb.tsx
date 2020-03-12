import React, { useEffect } from 'react';
import classname from 'classnames/bind';
import styles from './Breadcrumb.module.css';

let cx = classname.bind(styles);

export type BreadcrumbProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * Content of breadcrumb
   * */
  children: React.ReactNode;
  /**
   * Custom separator node
   * */
  separator: React.ReactNode;
};
const Breadcrumb = (props: BreadcrumbProps) => {
  const { className, children, separator = '/' } = props;
  useEffect(() => {
    document
      .querySelectorAll('a')
      .forEach(item => item.after(' ' + separator + ' '));
  }, [separator]);

  return <ul className={cx('breadcrumb', className)}>{children}</ul>;
};

export default Breadcrumb;
