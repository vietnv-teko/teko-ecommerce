import React from 'react';
import classname from 'classnames/bind';
import styles from './DoubleImage.module.scss';
import LazyImage from 'components/Common/LazyImage';

let cx = classname.bind(styles);

export type DoubleImageProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  images: any[];
  onClick?: () => void;
  size?: number;
};
const DoubleImage = (props: DoubleImageProps) => {
  const { className, images, onClick, size = 48, ...rest } = props;

  return (
    <div
      style={{ width: `${size * 1.3}px`, height: `${size * 1.3}px` }}
      className={cx(className)}
      onClick={onClick}
      {...rest}
    >
      <LazyImage
        src={images[0]}
        contain
        className={cx('image')}
        width={size}
        height={size}
      />
      <LazyImage
        src={images[1]}
        contain
        className={cx('image', 'second-image')}
        width={size}
        height={size}
      />
    </div>
  );
};

export default DoubleImage;
