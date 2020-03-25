import React, { useState, ReactNode } from 'react';
import styles from './Hover.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type HoverProps = {
  /**
   * box shadow outset, for example: 1px 2px 3px 4px
   * 1px is X offset
   * 2px is Y offset
   * 3px is blur
   * 4px is spread
   */
  outset?: string;
  /**
   * box shadow color in rbga, for example: rgba(0, 0, 0, 0.3)
   */
  rgbaColor?: string; //box shadow color,
  /**
   * children dom
   */
  children?: ReactNode;
};
const Hover = ({ outset, rgbaColor, children }: HoverProps) => {
  const [hover, setHover] = useState(false);
  let style = null;
  if (hover) {
    style = {
      boxShadow: `${outset} ${rgbaColor}`,
      transition: 'box-shadow 0.3s',
    };
  } else {
    style = { boxShadow: 'none' };
  }
  return (
    <div
      className={cs('hover')}
      style={style}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {children}
    </div>
  );
};

export default Hover;
