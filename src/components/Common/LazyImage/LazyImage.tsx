import React, { useState } from 'react';
import styles from './LazyImage.module.scss';
import classNames from 'classnames/bind';
import { commonHelper } from 'helpers';

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
  border?: boolean;
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
    border,
  } = props;
  const [imageUrl, setImageUrl] = useState(src);
  const placeHolder =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNjAiIGhlaWdodD0iMjYwIiB2aWV3Qm94PSIwIDAgMjYwIDI2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGNkY2RjYiIGQ9Ik0wIDBoMjYwdjI2MEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDQgMTA0aDU0djU0aC01NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjQjRCNEI0IiBkPSJNMTUxLjI1IDEwNi4yNWE0LjUgNC41IDAgMCAxIDQuNSA0LjV2NDAuNWE0LjUgNC41IDAgMCAxLTQuNSA0LjVoLTQwLjVhNC41IDQuNSAwIDAgMS00LjUtNC41di00MC41YTQuNSA0LjUgMCAwIDEgNC41LTQuNWg0MC41em0tMTMuNSAxOGwtOSAxMy41TDEyMiAxMzFsLTYuNzUgMTEuMjVoMzEuNWwtOS0xOHptLTEyLjM3NS02Ljc1YTMuMzc1IDMuMzc1IDAgMSAwIDAgNi43NSAzLjM3NSAzLjM3NSAwIDAgMCAwLTYuNzV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=';
  let objImg = new Image();
  objImg.src = imageUrl;
  objImg.onerror = () => {
    setImageUrl(placeHolder);
  };
  let style = commonHelper.cleanObject({
    paddingBottom: !height ? `${100 / aspectRatio}%` : '',
    height: height ? `${height}px` : '',
    width: width ? `${width}px` : '',
  });

  return (
    <div style={style} onClick={onClick} className={cx('image', className)}>
      <div className={cx('sizer')}></div>
      <div
        className={cx({ cover: !contain }, { contain: contain }, '__image', {
          border,
        })}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className={cx('content')}></div>
    </div>
  );
};

export default LazyImage;
