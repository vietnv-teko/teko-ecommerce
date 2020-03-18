import React, { useState, useEffect } from 'react';
import styles from './LazyImage.module.scss';
import classNames from 'classnames/bind';
import { cleanObject } from 'helpers';

let cx = classNames.bind(styles);
export type LazyImageProps = {
  /**
   * The image URL. This prop is mandatory
   * */
  src: string;
  /**
   * The action when click image
   * */
  onClick?: () => void;
  /**
   * Custom class
   * */
  className?: string;
  /**
   * Prevents the image from being cropped if it doesn't fit
   * */
  contain?: boolean;
  /**
   * Sets the height for the component.
   * */
  height?: number;
  /**
   * Sets the height for the component.
   * */
  width?: number;
  /**
   * Calculated as width/height, so for a 1920x1080px image this will be 1.7778. Will be calculated automatically if omitted
   * */
  aspectRatio?: number;
};
const LazyImage = (props: LazyImageProps) => {
  const {
    src,
    onClick,
    className,
    contain,
    aspectRatio = 1,
    height,
    width,
  } = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  let objImg = new Image();
  objImg.src = src;
  objImg.onload = () => {
    setImageLoaded(true);
  };
  let style = cleanObject({
    paddingBottom: !height ? `${100 / aspectRatio}%` : '',
    height: height ? `${height}px` : '',
    width: width ? `${width}px` : '',
  });
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
          { cover: !contain },
          { contain: contain },
          '__image',
        )}
        style={{
          backgroundImage: `url('${src}')`,
          backgroundPosition: 'center center',
        }}
      ></div>
      {!imageLoaded && <div className={cx('placeholder')}></div>}
      <div style={style} className={cx('content')}></div>
    </div>
  );
};

export default LazyImage;
