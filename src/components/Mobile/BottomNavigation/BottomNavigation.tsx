import React from 'react';
import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IBottomNavigation {
  className?: string;
}

const BottomNavigation: React.FC<IBottomNavigation> = ({
  className,
  children,
}) => {
  return <div className={cx('bottom_nav', className)}>{children}</div>;
};

export default BottomNavigation;
