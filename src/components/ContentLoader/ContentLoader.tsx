import React from 'react';
import styles from './ContentLoader.module.scss';
import classNames from 'classnames/bind';
import { cleanObject } from 'helpers';

let cx = classNames.bind(styles);

interface ContentLoaderProps {
  height?: number;
  width?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
}

const ContentLoader: React.FC<ContentLoaderProps> = props => {
  const { width, height, mt, mb, mr, ml } = props;
  return (
    <div
      className={cx('content-loader')}
      style={cleanObject({
        height: `${height}px` || '',
        width: `${width}px` || '',
        marginTop: `${mt}px` || '',
        marginBottom: `${mb}px` || '',
        marginRight: `${mr}px` || '',
        marginLeft: `${ml}px` || '',
      })}
    ></div>
  );
};

export default ContentLoader;
