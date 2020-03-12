import React, { useState, useEffect } from 'react';
import styles from './LazyImage.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
type LazyImageProps = {
  src: string;
  onClick?: () => void;
  className?: string;
  cover?: boolean;
  contain?: boolean;
};
const LazyImage: React.FC<LazyImageProps> = props => {
  const { src, onClick, className, cover, contain } = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  let objImg = new Image();
  objImg.src = src;
  objImg.onload = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    setImageLoaded(false);
    // eslint-disable-next-line
  }, [window.location.href]);
  return (
    <div onClick={onClick} className={cx('image')}>
      <div className={cx('sizer')}></div>
      <div
        className={cx(
          className,
          { cover: cover },
          { contain: contain },
          '__image',
        )}
        style={{
          backgroundImage: `url('${src}')`,
          backgroundPosition: 'center center',
        }}
      ></div>
      {!imageLoaded && <div className={cx('placeholder')}></div>}
      <div className={cx('content')}></div>
    </div>
  );
};

export default LazyImage;
