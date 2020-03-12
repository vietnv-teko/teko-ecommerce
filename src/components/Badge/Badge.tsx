import React from 'react';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

let cx = classNames.bind(styles);

interface IBadge {
  color?: any;
  value: number | string;
  className?: string;
}

const Badge: React.FC<IBadge> = props => {
  let { children, color = 'primary', value, className } = props;

  if (typeof value === 'string') value = parseInt(value);

  return (
    <div className={cx('container', color, className)}>
      {children}
      <span className={cx({ badge: true, round: value < 10 })}>
        {value < 100 ? value : '99+'}
      </span>
    </div>
  );
};

export default Badge;
