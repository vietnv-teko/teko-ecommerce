import React from 'react';
import LazyImage from '../../Common/LazyImage';
import classname from 'classnames/bind';
import styles from './SellerBar.module.scss';
import ListItem from 'components/Common/ListItem';

let cx = classname.bind(styles);

export type SellerBarProps = {
  /**
   * props test
   * */
  className?: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;
  verifyIcon?: React.ReactNode;
  avatar: string;
  name: string;
  info?: string;
  extraInfo?: React.ReactNode;
  imgSize?: number;
};

const SellerBar = (props: SellerBarProps) => {
  const {
    className,
    avatar,
    name,
    info,
    onClick,
    verifyIcon,
    extraInfo,
    imgSize = 40,
    ...rest
  } = props;

  return (
    <ListItem
      className={cx('seller-bar', className)}
      // @ts-ignore
      {...rest}
      left={
        <div className={cx('logo')}>
          <LazyImage
            src={avatar}
            aspectRatio={1}
            contain
            className={cx('image')}
            width={imgSize}
            height={imgSize}
          />
          {verifyIcon && (
            <span className={cx('verify-icon')}>{verifyIcon}</span>
          )}
        </div>
      }
      middle={
        <>
          <div className={cx('name')}>{name}</div>
          <div className={cx('info')}>{info}</div>
        </>
      }
      right={extraInfo}
    />
  );
};

export default SellerBar;
