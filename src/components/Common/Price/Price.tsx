import React from 'react';
import classNames from 'classnames/bind';
import styles from './Price.module.scss';
import helper from 'helpers';

let cx = classNames.bind(styles);

interface IPrice {
  finalPrice: number;
  oldPrice?: number;
  className?: string;
}

const Price: React.FC<IPrice> = props => {
  let { finalPrice, oldPrice, className } = props;
  const { formatCurrency } = helper;
  return (
    <div className={cx('price', className)}>
      <div className={cx('final-price')}> {formatCurrency(finalPrice)}</div>
      {!!oldPrice && (
        <div className={cx('old-price')}>{formatCurrency(oldPrice)}</div>
      )}
    </div>
  );
};

export default Price;
