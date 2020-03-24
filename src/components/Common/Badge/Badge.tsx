import React from 'react';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';
import { commonHelper } from 'helpers';

let cx = classNames.bind(styles);

interface IBadge {
  color?: any;
  value: number | undefined;
  max?: number | undefined;
  className?: string;
  offsetX?: number;
  offsetY?: number;
}

const Badge: React.FC<IBadge> = props => {
  let {
    children,
    color = '#1669a8',
    value,
    className,
    max = 99,
    offsetX,
    offsetY,
  } = props;

  return (
    <div className={cx('container', className)}>
      {children}
      {!!value && (
        <span
          className={cx('badge', { scale: value > max })}
          style={commonHelper.cleanObject({
            backgroundColor: color,
            bottom: offsetY ? `calc(100% - ${offsetY}px)` : '',
            left: offsetX ? `calc(100% - ${offsetX}px)` : '',
          })}
        >
          {value <= max ? value : `${max}+`}
        </span>
      )}
    </div>
  );
};

export default Badge;
