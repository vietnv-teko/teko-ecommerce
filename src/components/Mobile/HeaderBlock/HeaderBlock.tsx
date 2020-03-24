import React from 'react';
import classname from 'classnames/bind';
import styles from './HeaderBlock.module.scss';
import { cleanObject } from 'helpers';
let cx = classname.bind(styles);

interface IHeaderBlock {
  className?: any;
  backgroundColor?: string;
}

const HeaderBlock: React.FC<IHeaderBlock> = props => {
  const { className, children, backgroundColor, ...rest } = props;
  return (
    <div
      {...rest}
      style={cleanObject({
        backgroundColor: backgroundColor,
      })}
      className={cx('header-block', className)}
    >
      {children}
    </div>
  );
};

export default HeaderBlock;
