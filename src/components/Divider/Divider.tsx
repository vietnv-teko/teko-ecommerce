import React from 'react';
import classname from 'classnames/bind';
import styles from './Divider.module.css';
let cx = classname.bind(styles);

interface DividerProps {
  variant?: string;
  className?: string;
}
const Divider: React.FC<DividerProps> = props => {
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
