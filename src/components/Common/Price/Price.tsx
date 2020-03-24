import React from 'react';
import classNames from 'classnames/bind';
import styles from './Price.module.scss';
import helper from 'helpers';

let cx = classNames.bind(styles);

interface IPrice {
  finalPrice: number | undefined | null;
  oldPrice?: number;
  className?: string;
  showDiscount?: boolean;
}

const Price: React.FC<IPrice> = props => {
  let { finalPrice, oldPrice, className, showDiscount } = props;
  const { formatCurrency, getDiscountPercent } = helper;
  if (!finalPrice) {
    return null;
  }
  return (
    <div className={cx('price', className)}>
      <div className={cx('final-price')}> {formatCurrency(finalPrice)}</div>
      {!!oldPrice && (
        <div>
          <span className={cx('old-price')}>{formatCurrency(oldPrice)}</span>
          {showDiscount && !!getDiscountPercent(finalPrice, oldPrice) && (
            <span className={cx('discount')}>
              -{getDiscountPercent(finalPrice, oldPrice)}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Price;
