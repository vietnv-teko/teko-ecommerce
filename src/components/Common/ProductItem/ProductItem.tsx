import React from 'react';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import LazyImage from 'components/Common/LazyImage';
import Price from 'components/Common/Price';
import DiscountTag from '../DiscountTag';
let cx = classNames.bind(styles);

export type ProductItemProps = {
  /**
   * props test
   * */
  className?: string;
  type: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;

  img: string;
  discount?: string;
  finalPrice: number;
  oldPrice?: number;
  name: string;
  sellerShippingInfo?: string;
};

const ProductItem: React.FC<ProductItemProps> = props => {
  const {
    className,
    onClick,
    type = 'grid',
    img,
    discount,
    finalPrice,
    oldPrice,
    name,
    sellerShippingInfo,
    ...rest
  } = props;
  return (
    <div
      onClick={() => onClick}
      className={cx(
        'product-item',
        { 'list-view': type === 'list' },
        { 'grid-view': type === 'grid' },
        className,
      )}
      {...rest}
    >
      <div className={cx('product-image')}>
        <DiscountTag value={discount} theme={1}>
          <LazyImage src={img || ''} />
        </DiscountTag>
      </div>
      <div className={cx('product-content')}>
        <div className={cx('name')}>{name}</div>
        {sellerShippingInfo && (
          <div className={cx('shipping-info')}>
            <span>{sellerShippingInfo}</span>
          </div>
        )}
        <Price finalPrice={finalPrice} oldPrice={oldPrice} />
      </div>
    </div>
  );
};

export default ProductItem;
