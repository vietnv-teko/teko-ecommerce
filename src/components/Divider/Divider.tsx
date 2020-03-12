import React from 'react';
import classname from 'classnames/bind';
import styles from './Divider.module.scss';
let cx = classname.bind(styles);

export type DividerProps = {
  /**
   * The variant to use. Include 'default', 'middle', 'vertical'
   * */
  variant?: string;
  /**
   * Custom style of component
   * */
  className?: string;
};
const Divider = (props: DividerProps) => {
  const { variant, className } = props;
  return (
    <hr
      className={cx(
        className ? className : '',
        { middle: variant === 'middle' },
        { vertical: variant === 'vertical' },
        'divider',
      )}
    />
  );
};

export default Divider;
