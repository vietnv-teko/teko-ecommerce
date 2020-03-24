import React from 'react';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import LazyImage from 'components/Common/LazyImage';
import Price from 'components/Common/Price';
import Tag from 'components/Common/Tag';
import Icon from '../Icon';
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
  hasGift: boolean;
  borderImage?: boolean;
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
    hasGift,
    borderImage,
    ...rest
  } = props;
  return (
    <div
      onClick={onClick}
      className={cx(
        'product-item',
        { 'list-view': type === 'list' },
        { 'grid-view': type === 'grid' },
        className,
      )}
      {...rest}
    >
      <div className={cx('product-image', 'relative')}>
        {discount && type === 'grid' && (
          <Tag
            className={cx('discount-tag')}
            value={discount}
            backgroundColor="#eb1f3a"
          />
        )}
        {hasGift && <span className={cx('gift')}></span>}
        <LazyImage border={borderImage} contain src={img || ''} />
      </div>
      <div className={cx('product-content')}>
        <div className={cx('name')}>{name}</div>
        {sellerShippingInfo && (
          <div className={cx('shipping-info')}>
            <Icon className={cx('mr5')} color="#53c305">
              icon vns-Freeshipping ShippingInfo
            </Icon>
            <span>{sellerShippingInfo}</span>
          </div>
        )}
        <Price
          showDiscount={type === 'list'}
          className={cx('mt5')}
          finalPrice={finalPrice}
          oldPrice={oldPrice}
        />
      </div>
    </div>
  );
};

export default ProductItem;
