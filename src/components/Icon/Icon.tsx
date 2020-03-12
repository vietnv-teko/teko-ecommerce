import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type IProps = {
  fontSize?: number; //icon font size
  color?: string; //icon color
  className?: string; //icon class
};
export default ({ fontSize, color, className, ...rest }: IProps) => {
  return (
    <i
      className={cs('tek-icon', className)}
      style={{
        color: `${color || 'white'}`,
        fontSize: `${fontSize ? fontSize + 'px' : '14px'}`,
      }}
      {...rest}
    ></i>
  );
};
