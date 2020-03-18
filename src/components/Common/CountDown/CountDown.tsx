import React from 'react';
import classname from 'classnames/bind';
import styles from './CountDown.module.scss';

let cx = classname.bind(styles);

export type CountDownProps = {
  /**
   * props test
   * */
  className?: string;

  label: string;
};

const CountDown = (props: CountDownProps) => {
  const { className, label } = props;

  return (
    <div className={cx('countdown', className)}>
      <span className={cx('title')}>{label}</span>
      {/* <div className={cx('timer')}>
        <div className={cx('timerItem')}>
          {duration.hours() < 10 ? `0${duration.hours()}` : duration.hours()}
        </div>
        <div className={cx('timerItem')}>
          {duration.minutes() < 10
            ? `0${duration.minutes()}`
            : duration.minutes()}
        </div>
        <div className={cx('timerItem')}>
          {duration.seconds() < 10
            ? `0${duration.seconds()}`
            : duration.seconds()}
        </div>
      </div> */}
    </div>
  );
};

export default CountDown;
