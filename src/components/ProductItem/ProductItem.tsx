import React from 'react';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import helper from 'helpers';
import { IProductItem } from 'interfaces';

let cx = classNames.bind(styles);

export type ProductItemProps = {
  /**
   * props test
   * */
  product: IProductItem;
  className?: string;
  type: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;
};

const ProductItem: React.FC<ProductItemProps> = props => {
  const { className, onClick, product, type = 'grid' } = props;
  const { formatCurrency, getBestPrice, getDiscountPercent } = helper;
  return (
    <div
      onClick={() => onClick}
      className={cx(
        'product-item',
        { 'list-view': type === 'list' },
        { 'grid-view': type === 'grid' },
        className,
      )}
    >
      <div className={cx('product-image')}>
        <div className={cx('image')}>
          <img src={product.images && product.images[0].url} alt="" />
        </div>
      </div>
      <div className={cx('product-content')}>
        <div className={cx('name')}>
          {product.displayName ? product.displayName : product.name}
        </div>
        {false && (
          <div className={cx('shipping-info')}>
            <span>Miễn phí giao hàng toàn quốc</span>
          </div>
        )}
        <div className={cx('price')}>
          <div className={cx('final-price')}>{getBestPrice(product)}</div>
          <div>
            <span className={cx('old-price')}>
              {formatCurrency(product.price.supplierSalePrice)}
            </span>
            {!!getDiscountPercent(product) && (
              <span className={cx('discount-tag')}>
                -{getDiscountPercent(product)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
