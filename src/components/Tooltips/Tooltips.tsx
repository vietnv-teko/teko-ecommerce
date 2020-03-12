import React, { ReactNode } from 'react';
import styles from './Tooltips.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type TTProps = {
  content: string | ReactNode; //hovered content to show tooltips
  text: string | ReactNode; //tooltips text
  position?: string; //tooltips position, default top
  width?: number; //tooltips width, default 100px
  fontSize?: number; //tooltips fontsize, default 13px
};
export default ({
  content,
  position,
  text,
  width,
  fontSize,
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
          `${width ? 'tooltiptext-width-' + width : 'tooltiptext-width-100'}`,
          `${
            fontSize ? 'tooltiptext-fsize-' + fontSize : 'tooltiptext-fsize-13'
          }`,
        )}
      >
        {text}
      </span>
    </div>
  );
};
