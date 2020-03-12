import React, { ReactNode } from 'react';
import styles from './Grid.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
type GProps = {
  // ROW
  align?: string; //vertical alignment
  justify?: string; //horizontal arrangement
  rowGap?: number; //row gap, default 10
  // COLUMN
  content: any[]; //column content
  colHeight?: number; //column height
  colGap?: number; //column gap, default 10
  colNum?: number; //number of colume, default 1
};
export default ({
  align,
  justify,
  content,
  colHeight,
  rowGap,
  colGap,
  colNum,
  ...rest
}: GProps) => {
  return (
    <div
      className={cx(
        `${colNum ? 'tek-row-' + colNum : 'tek-row-1'}`,
        `${align ? 'tek-row-align-' + align : 'tek-row-align-top'}`,
        `${justify ? 'tek-row-justify-' + justify : 'tek-row-justify-start'}`,
        `${rowGap ? 'tek-row-gap-' + rowGap : 'tek-row-gap-10'}`,
        `${colGap ? 'tek-col-gap-' + colGap : 'tek-col-gap-10'}`,
      )}
      {...rest}
    >
      {content.map((item: any | ReactNode, index: number) => (
        <div
          key={index}
          className={cx(
            'tek-col',
            `tek-col-${content.length}`,
            `${colHeight ? 'tek-col-hei-' + colHeight : ''}`,
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
