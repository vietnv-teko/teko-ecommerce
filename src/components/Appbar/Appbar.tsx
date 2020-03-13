import React from 'react';
import classNames from 'classnames/bind';
import styles from './Appbar.module.scss';

let cx = classNames.bind(styles);

interface IAppbar {
  position?: string;
  middle?: any;
  endIcon?: any;
  startIcon?: any;
  className?: string;
}

const Appbar: React.FC<IAppbar> = ({
  position = 'relative',
  startIcon,
  middle,
  endIcon,
  className,
}) => {
  return (
    <div
      className={cx({
        appbar: true,
        [position]: true,
        className,
      })}
    >
      {startIcon && <div className={cx('start')}>{startIcon}</div>}
      {middle && <div className={cx({ middle: true })}>{middle}</div>}
      {endIcon && <div className={cx('end')}>{endIcon}</div>}
    </div>
  );
};

export default Appbar;
