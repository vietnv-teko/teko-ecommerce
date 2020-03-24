import React from 'react';
import classname from 'classnames/bind';
import styles from './ListItem.module.scss';

let cx = classname.bind(styles);

export type ListItemProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  onClick?: () => void;
  borderBottom?: string;
};
const ListItem = (props: ListItemProps) => {
  const {
    className,
    left,
    middle,
    right,
    onClick,
    borderBottom,
    ...rest
  } = props;

  return (
    <>
      <li className={cx('list-item', className)} onClick={onClick} {...rest}>
        <div className={styles.left}>{left}</div>
        <div className={styles.middle}>{middle}</div>
        <div className={styles.right}>{right}</div>
      </li>
      {borderBottom && <hr className={cx('default', borderBottom)} />}
    </>
  );
};

export default ListItem;
