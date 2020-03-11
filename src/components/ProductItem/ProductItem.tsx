import React from 'react';
import styles from './ProductItem.module.css';
import classname from 'classnames/bind';
let cx = classname.bind(styles);

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
  /**
   * Simple click handler
   */
  onClick?: () => void;
}

const ProductItem: React.FC<ProductItemProps> = props => {
  const { className, onClick, product } = props;
  return (
    <div onClick={() => onClick} className={cx('product-item', className)}>
      <div className={cx('product-image')}>
        <img src={product.image} alt="" />
        {product.status && (
          <div className={cx('product-status')}>{product.status}</div>
        )}
      </div>
      <div className={cx('product-name')}>{product.name}</div>
      <div className={cx('shipping-info')}>
        <span>Miễn phí giao hàng toàn quốc</span>
      </div>
      <div className={cx('product-price')}>
        <div className={cx('final-price')}>{product.price.sellPrice}</div>
        <div className={cx('old-price')}>{product.price.supplierSalePrice}</div>
      </div>
    </div>
  );
};

export default ProductItem;
