import React, { ReactNode } from 'react';
import styles from './Tooltips.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type TTProps = {
  content: string | ReactNode; //hovered content to show tooltips
  text: string | ReactNode; //tooltips text
  position?: string; //tooltips position, default top
  tWidth?: number; //tooltips width, default 100px
  tFsize?: number; //tooltips fontsize, default 13px
};
export default ({
  content,
  position,
  text,
  tWidth,
  tFsize,
  ...rest
}: TTProps) => {
  return (
    <div className={cs('tooltip')}>
      {content}
      <span
        {...rest}
        className={cs(
          'tooltiptext',
          `${position ? 'tooltiptext-' + position : 'tooltiptext-top'}`,
          `${tWidth ? 'tooltiptext-width-' + tWidth : 'tooltiptext-width-100'}`,
          `${tFsize ? 'tooltiptext-fsize-' + tFsize : 'tooltiptext-fsize-13'}`,
        )}
      >
        {text}
      </span>
    </div>
  );
};
