import React from 'react';
import styles from './BottomActionBar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export type BottomActionBarProps = {
  className?: string | [];
};

const BottomActionBar: React.FC<BottomActionBarProps> = props => {
  const { className, children } = props;
  return <div className={cx('bottom-action-bar', className)}>{children}</div>;
};

export default BottomActionBar;
