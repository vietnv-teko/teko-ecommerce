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
  label: string;
  onClick?: () => void;
};
const ListItem = (props: ListItemProps) => {
  const { className, left, label, right, onClick } = props;

  return (
    <div className={cx('list-item', className)} onClick={onClick}>
      {left}
      <div>{label}</div>
      {right}
    </div>
  );
};

export default ListItem;
