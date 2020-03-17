import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
type IconProps = {
  size?: number; //icon font size
  color?: string; //icon color
  className?: string; //icon class
};
const Icon: React.FC<IconProps> = props => {
  const { size = 14, color = 'black', className, children, ...rest } = props;
  return (
    <i
      className={cx(className, children)}
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
      {...rest}
    ></i>
  );
};

export default Icon;
