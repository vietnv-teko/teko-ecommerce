import React from 'react';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import helper from 'helpers';
import { IProductItem } from 'interfaces';
import LazyImage from 'components/LazyImage';
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
  const { className, onClick, product, type = 'grid', ...rest } = props;
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
      {...rest}
    >
      <div className={cx('product-image')}>
        <LazyImage src={(product.images && product.images[0].url) || ''} />
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
