import React from 'react';
import classname from 'classnames/bind';
import styles from './FlashSaleItem.module.scss';
import MiniProductItem from '../../Mobile/MiniProductItem';
import { productHelper } from 'helpers';

let cx = classname.bind(styles);

export type FlashSaleItemProps = {
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
  flashSale: any;
};

const FlashSaleItem = (props: FlashSaleItemProps) => {
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
    height = 80,
    flashSale,
  } = props;
  const getProgress = (total: number, used: number) => {
    const remain = total - used;
    if (remain <= 5 && total <= 10) {
      return 80 + 20 * (used / total);
    }
    return (used * 100) / total;
  };

  return (
    <div className={cx('flash-sale-item', className)} onClick={onClick}>
      <MiniProductItem
        price={price}
        discount={discount}
        img={img}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        height={height}
      />
      <div
        className={cx(
          'meter',
          !flashSale.total || flashSale.total - flashSale.used <= 0
            ? 'meterEnd'
            : '',
        )}
      >
        <span
          className={cx('progress')}
          style={{
            width: `${getProgress(flashSale.total, flashSale.used)}%`,
          }}
        />
        <span className={cx('text')}>
          {productHelper.getCountItemTextFlashSale(flashSale)}
        </span>
      </div>
    </div>
  );
};

export default FlashSaleItem;
