import React from 'react';
import LazyImage from '../../Common/LazyImage';
import Price from '../../Common/Price';
import classname from 'classnames/bind';
import styles from './MiniProductItem.module.scss';
import Tag from 'components/Common/Tag';

let cx = classname.bind(styles);

export type MiniProductItemProps = {
  /**
   * props test
   * */
  className?: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;

  img: string;
  discount?: string | null;
  price?: number;
  borderImage?: boolean;
  width?: number;
  height?: number;
};

const MiniProductItem = (props: MiniProductItemProps) => {
  const {
    className,
    img,
    discount,
    price,
    onClick,
    borderImage,
    width,
    height,
    ...rest
  } = props;

  return (
    <div className={cx('productItem', className)} onClick={onClick} {...rest}>
      <div className="relative">
        {discount && <Tag value={discount} className={cx('discount')} />}
        <LazyImage
          src={img || ''}
          contain
          border={borderImage}
          width={width}
          height={height}
        />
      </div>
      <Price finalPrice={price} className={cx('price')} />
    </div>
  );
};

export default MiniProductItem;
