import React from 'react';
import classname from 'classnames/bind';
import styles from './ListItem.module.css';

let cx = classname.bind(styles);

export type ListItemProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  middle?: React.ReactNode;
  onClick?: () => void;
};
const ListItem = (props: ListItemProps) => {
  const { className, left, middle, right, onClick } = props;

  return (
    <li className={cx('list-item', className)} onClick={onClick}>
      {left}
      {middle}
      {right}
    </li>
  );
};

export default ListItem;
