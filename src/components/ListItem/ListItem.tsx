import React from 'react';
import classname from 'classnames/bind';
import styles from './ListItem.module.css';

let cx = classname.bind(styles);

export type ListItemProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
const ListItem = (props: ListItemProps) => {
  const { className, children, onClick } = props;

  return (
    <li className={cx('list-item', className)} onClick={onClick}>
      {children}
    </li>
  );
};

export default ListItem;
