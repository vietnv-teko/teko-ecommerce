import React from 'react';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

let cx = classNames.bind(styles);

interface IBadge {
  color?: any;
  value: number | string;
  max?: number;
  className?: string;
}

const Badge: React.FC<IBadge> = props => {
  let { children, color = '#1669a8', value, className, max = 999 } = props;

  if (typeof value === 'string') value = parseInt(value);

  return (
    <div className={cx('container', className)}>
      {children}
      <span
        className={cx('badge', { round: value < 10 && max < 10 })}
        style={{ backgroundColor: color }}
      >
        {value <= max ? value : `${max}+`}
      </span>
    </div>
  );
};

export default Badge;
