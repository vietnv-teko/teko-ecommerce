import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type IProps = {
  size?: number; //icon font size
  color?: string; //icon color
  className?: string; //icon class
};
export default ({ size, color, className, ...rest }: IProps) => {
  return (
    <i
      className={cs('tek-icon', className)}
      style={{
        color: `${color || 'white'}`,
        fontSize: `${size ? size + 'px' : '14px'}`,
      }}
      {...rest}
    ></i>
  );
};
