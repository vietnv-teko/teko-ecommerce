import * as React from 'react';
import styles from './Divider.module.scss';

export type Divider = {
  /**
   * props test
   * */
  props1?: string;
  /**
   * Simple click handler
   */
  onClick?: () => void;
};

const Divider = ({ props1 = '1' }: Divider) => {
  return <div className={styles.divider}>divider {props1}</div>;
};

export default Divider;
