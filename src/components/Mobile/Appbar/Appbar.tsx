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
    <>
      <div
        className={cx({
          appbar: true,
          [position]: true,
          className,
        })}
      >
        <div className={cx('start')}>{startIcon}</div>
        <div className={cx('middle')}>{middle}</div>
        <div className={cx('end')}>{endIcon}</div>
      </div>
      {position === 'fixed' && <div className={cx('top-wrapper')}></div>}
    </>
  );
};

export default Appbar;
