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
  let { children, color = '#1669a8', value, className } = props;

  if (typeof value === 'string') value = parseInt(value);

  return (
    <div className={cx('container', className)}>
      {children}
      <span
        className={cx({ badge: true, round: value < 10 })}
        style={{ backgroundColor: color }}
      >
        {value < 1000 ? value : '999+'}
      </span>
    </div>
  );
};

export default Badge;
