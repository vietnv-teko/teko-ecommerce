import React from 'react';
import classname from 'classnames/bind';
import styles from './HorizontalScroll.module.scss';
let cx = classname.bind(styles);

export type HorizontalScrollProps = {
  slidesPerView: number;
  className?: string;
};
const HorizontalScroll: React.FC<HorizontalScrollProps> = props => {
  const { children, slidesPerView = 5, className } = props;
  if (!Array.isArray(children)) {
    return null;
  }
  return (
    <div className={cx('horizontal-scroll', className)}>
      {Array.isArray(children) &&
        children.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              width: `${100 / slidesPerView}%`,
              flexShrink: 0,
            }}
            className={cx('horizontal-scroll-item')}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default HorizontalScroll;
