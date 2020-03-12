import React from 'react';
import styles from './Grid.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
type GridProps = {
  // ROW
  align?: string; //vertical alignment
  justify?: string; //horizontal arrangement
  rowGap?: number; //row gap, default 10
  colGap?: number; //column gap, default 10
  colNum?: number; //number of colume, default 1
  className?: string;
};
const Grid: React.FC<GridProps> = props => {
  const {
    align,
    justify,
    rowGap = 10,
    colGap = 10,
    colNum = 1,
    children,
    className,
    ...rest
  } = props;
  return (
    <div
      className={cx(
        className,
        `${colNum}-columns`,
        `row-gap-${rowGap}`,
        `col-gap-${colGap}`,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Grid;
