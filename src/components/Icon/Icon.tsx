import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type IProps = {
  icfsize?: number; //icon font size
  iccolor?: string; //icon color
  icclass?: string; //icon class
};
export default ({ icfsize, iccolor, icclass, ...rest }: IProps) => {
  return (
    <i
      className={cs('tek-icon', `${icclass ? icclass : ''}`)}
      style={{
        color: `${iccolor || 'white'}`,
        fontSize: `${icfsize ? icfsize + 'px' : '14px'}`,
      }}
      {...rest}
    ></i>
  );
};
