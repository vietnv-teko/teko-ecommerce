import React from 'react';
import classname from 'classnames/bind';
import styles from './List.module.css';

let cx = classname.bind(styles);

export type ListProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * Content of List
   * */
  children: React.ReactNode;
};
const List = (props: ListProps) => {
  const { className, children } = props;

  return <ul className={cx('list', className)}>{children}</ul>;
};

export default List;
