import React from 'react';
import classname from 'classnames/bind';
import styles from './HeaderBlock.module.scss';
let cx = classname.bind(styles);

interface IHeaderBlock {
  className?: string;
}

const HeaderBlock: React.FC<IHeaderBlock> = props => {
  const { className, children } = props;

  return <div className={cx('header-block', className)}>{children}</div>;
};

export default HeaderBlock;
