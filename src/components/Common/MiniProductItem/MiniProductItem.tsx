import React from 'react';
import LazyImage from '../LazyImage';
import Price from '../Price';
import classname from 'classnames/bind';
import styles from './MiniProductItem.module.scss';
import DiscountTag from '../DiscountTag';

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
  discount?: string;
  price: number;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  height?: number;
  width?: number;
};

const MiniProductItem = (props: MiniProductItemProps) => {
  const {
    className,
    img,
    discount,
    price,
    onClick,
    top,
    right,
    bottom,
    left,
    width = 80,
    height,
  } = props;

  return (
    <div className={cx('productItem', className)} onClick={onClick}>
      <DiscountTag
        value={discount}
        className={cx('discount')}
        top={top}
        right={right}
        left={left}
        bottom={bottom}
        theme={2}
      >
        <LazyImage src={img || ''} width={width} height={height} />
      </DiscountTag>
      <Price finalPrice={price} className={cx('price')} />
    </div>
  );
};

export default MiniProductItem;
