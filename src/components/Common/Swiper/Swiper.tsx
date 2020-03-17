import React from 'react';
import styles from './Swiper.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ICarousel {
  items: any[];
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
  const { items } = props;
  return <div className={cx('carousel')}>{items}</div>;
};

export default Carousel;
