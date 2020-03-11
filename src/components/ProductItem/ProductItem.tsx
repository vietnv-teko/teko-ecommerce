import * as React from 'react';
import styles from './ProductItem.module.css';

export type ProductItem = {
  /**
   * props test
   * */
  props1?: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;
};

const ProductItem = ({ props1 = '1' }: ProductItem) => {
  return <div className={styles.divider}>divider {props1}</div>;
};

export default ProductItem;
