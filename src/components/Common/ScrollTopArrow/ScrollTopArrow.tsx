import React, { useState, useEffect } from 'react';
import classname from 'classnames/bind';
import styles from './ScrollTopArrow.module.scss';

let cx = classname.bind(styles);
export type ScrollTopArrowProps = {
  /**
   * custom style of component
   * */
  className?: string;
  color?: string;
  scrollHeight: number;
  size?: number;
};

const ScrollTopArrow = (props: ScrollTopArrowProps) => {
  const { className, color = '#848788', scrollHeight, size = 24 } = props;
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  const listenScrollEvent = () => {
    setShow(window.scrollY > scrollHeight ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cx('btnScrollTop', className, { active: show })}
      onClick={scrollToTop}
      style={{ color, fontSize: `${size}px` }}
    >
      <i className="icon vns-Up-2" />
    </div>
  );
};

export default ScrollTopArrow;
