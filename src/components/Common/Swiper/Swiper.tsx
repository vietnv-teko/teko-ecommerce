import React from 'react';
import styles from './Swiper.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ICarousel {
  speed?: number;
  spaceBetween?: number;
  slidesPerView?: number;
  showArrows?: boolean;
  showArrowsOnHover?: boolean;
  loop?: boolean;
  showDots?: boolean;
  className?: string;
}

const Carousel: React.FC<ICarousel> = props => {
  const { children, slidesPerView = 1 } = props;
  if (!Array.isArray(children)) {
    return null;
  }
  return (
    <div className={cx('carousel')}>
      {Array.isArray(children) &&
        children.map(item => (
          <div
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

export default Carousel;
