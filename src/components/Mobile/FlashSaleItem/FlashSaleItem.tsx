import React from 'react';
import classname from 'classnames/bind';
import styles from './FlashSaleItem.module.scss';
import MiniProductItem from '../../Mobile/MiniProductItem';

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
  price?: number;
  width?: number;
  height?: number;
  total: number;
  used: number;
};

const FlashSaleItem = (props: FlashSaleItemProps) => {
  const {
    className,
    img,
    discount,
    price,
    onClick,
    width,
    height,
    total,
    used,
    ...rest
  } = props;
  const getProgress = (total: number, used: number) => {
    const remain = total - used;
    if (remain <= 5 && total <= 10) {
      return 80 + 20 * (used / total);
    }
    return (used * 100) / total;
  };
  const getCountItemTextFlashSale = (total: number, used: number) => {
    const remain = total - used;
    if (remain > 5) {
      return `Đã bán ${used}`;
    }
    if (remain <= 5 && remain > 0) {
      return `Còn lại ${remain}`;
    }
    return 'Đã bán hết';
  };
  return (
    <div
      className={cx('flash-sale-item', className)}
      onClick={onClick}
      {...rest}
    >
      <MiniProductItem
        price={price}
        discount={discount}
        img={img}
        width={width}
        height={height}
      />
      <div
        className={cx('meter', !total || total - used <= 0 ? 'meterEnd' : '')}
      >
        <span
          className={cx('progress')}
          style={{
            width: `${getProgress(total, used)}%`,
          }}
        />
        <span className={cx('text')}>
          {getCountItemTextFlashSale(total, used)}
        </span>
      </div>
    </div>
  );
};

export default FlashSaleItem;
