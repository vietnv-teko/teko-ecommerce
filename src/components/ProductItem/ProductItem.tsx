import React from 'react';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import helper from 'helpers';

let cx = classNames.bind(styles);

interface ProductItemProps {
  /**
   * props test
   * */
  product: {
    sku: string;
    name: string;
    price: {
      sellPrice: number;
      supplierSalePrice: number;
    };
    image: string;
    status?: string;
  };
  className?: string;
  type: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;
}

const ProductItem: React.FC<ProductItemProps> = props => {
  const { className, onClick, product, type = 'grid' } = props;
  const { formatCurrency } = helper;
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
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className={cx('product-content')}>
        <div className={cx('name')}>{product.name}</div>
        <div className={cx('shipping-info')}>
          <span>Miễn phí giao hàng toàn quốc</span>
        </div>
        <div className={cx('price')}>
          <div className={cx('final-price')}>
            {formatCurrency(product.price.sellPrice)}
          </div>
          <div>
            <span className={cx('old-price')}>
              {formatCurrency(product.price.supplierSalePrice)}
            </span>
            <span className={cx('discount-tag')}>-10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
