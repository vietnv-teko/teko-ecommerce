import React, { useState, useEffect } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type IProps = {
  src: string | undefined;
  alt: string | undefined;
  onClick?: () => void;
  lazySrc?: string;
  style?: any;
  className?: any;
};
const placeHolder =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNjAiIGhlaWdodD0iMjYwIiB2aWV3Qm94PSIwIDAgMjYwIDI2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGNkY2RjYiIGQ9Ik0wIDBoMjYwdjI2MEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDQgMTA0aDU0djU0aC01NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjQjRCNEI0IiBkPSJNMTUxLjI1IDEwNi4yNWE0LjUgNC41IDAgMCAxIDQuNSA0LjV2NDAuNWE0LjUgNC41IDAgMCAxLTQuNSA0LjVoLTQwLjVhNC41IDQuNSAwIDAgMS00LjUtNC41di00MC41YTQuNSA0LjUgMCAwIDEgNC41LTQuNWg0MC41em0tMTMuNSAxOGwtOSAxMy41TDEyMiAxMzFsLTYuNzUgMTEuMjVoMzEuNWwtOS0xOHptLTEyLjM3NS02Ljc1YTMuMzc1IDMuMzc1IDAgMSAwIDAgNi43NSAzLjM3NSAzLjM3NSAwIDAgMCAwLTYuNzV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=';
export default ({
  src,
  alt,
  onClick,
  lazySrc,
  style,
  className,
  ...rest
}: IProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageError = () => setImageError(true);
  const handleImageLoaded = () => setImageLoaded(true);
  useEffect(() => {
    setImageLoaded(false);
    // eslint-disable-next-line
  }, [window.location.href]);
  return (
    <>
      {!imageError && src ? (
        <>
          <img
            src={src}
            onError={handleImageError}
            onLoad={handleImageLoaded}
            alt={alt}
            className={cs(className)}
            onClick={onClick}
            style={style}
            {...rest}
          />
          {lazySrc && !imageLoaded && (
            <img
              className={cs('lazySrc', className)}
              src={lazySrc}
              onClick={onClick}
              style={style}
              alt=""
            />
          )}
        </>
      ) : (
        <img src={placeHolder} alt="vnshop-error" />
      )}
    </>
  );
};
