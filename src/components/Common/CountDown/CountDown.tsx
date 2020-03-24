import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CountDown.module.scss';

let cx = classNames.bind(styles);

type CDProps = {
  /**
   * date data with yyyy-mm-dd HH:mm:ss format
   */
  date: string;
  /**
   * extra class name for the whole component, such as mb10, p1 for margin bottom 10px padding 1px
   */
  classNames?: any;
  /**
   * item's class name
   */
  timerClassNames?: any;
  /**
   * item's background
   */
  timerBackground?: string;
};
const CountDown = ({
  date,
  classNames,
  timerClassNames,
  timerBackground = '#fff',
  ...rest
}: CDProps) => {
  const calculateTimeLeft = () => {
    const formattedDate = date.replace(' ', 'T');
    const countDownDate = new Date(formattedDate).getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  let timerComponents: any = [];
  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <div
        key={interval}
        style={{ backgroundColor: timerBackground }}
        className={cx('timer-item', timerClassNames)}
      >
        {timeLeft[interval] < 10
          ? `0${timeLeft[interval]}`
          : timeLeft[interval]}
      </div>,
    );
  });
  if (!timerComponents.length) return null;
  return (
    <div className={cx('timer', classNames)} {...rest}>
      {timerComponents}
    </div>
  );
};
export default CountDown;
