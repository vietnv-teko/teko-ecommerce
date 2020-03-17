import React from 'react';
import HeaderBlock from 'components/Mobile/HeaderBlock';
import styles from 'components/Mobile/HeaderBlock/HeaderBlock.module.scss';
import Icon from 'components/Common/Icon';
import Link from 'components/Common/Link';
import classname from 'classnames/bind';

let cx = classname.bind(styles);

export default {
  title: 'Mobile/HeaderBlock',
};

export const Theme1 = () => (
  <div style={{ width: '375px' }}>
    <HeaderBlock>
      <div className={cx('title')}>Danh mục sản phẩm</div>
      <Link color="#848788" className={cx('view-more')} href="/">
        <span>Xem tất cả</span>
        <Icon color="#848788">icon vns-Forward</Icon>
      </Link>
    </HeaderBlock>
  </div>
);

export const Theme2 = () => (
  <div style={{ width: '375px' }}>
    <HeaderBlock>
      <div className={cx('title', 'fs20')}>Danh mục sản phẩm</div>
      <Link color="#848788" className={cx('view-more')} href="/">
        <span>Xem tất cả</span>
        <Icon color="#848788">icon vns-Forward</Icon>
      </Link>
    </HeaderBlock>
  </div>
);

export const Theme3 = () => (
  <div style={{ width: '375px' }}>
    <HeaderBlock className={cx('theme-3')}>
      <div className={cx('title')}>Địa chỉ nhận hàng</div>
      <Link className={cx('view-more')} href="/">
        Thay đổi
      </Link>
    </HeaderBlock>
  </div>
);
