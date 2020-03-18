import React from 'react';
import HeaderBlock from 'components/Mobile/HeaderBlock';
import styles from 'components/Mobile/HeaderBlock/HeaderBlock.module.scss';
import Icon from 'components/Common/Icon';
import Link from 'components/Common/NewLink';
import classname from 'classnames/bind';
import Divider from 'components/Common/Divider';

let cx = classname.bind(styles);

export default {
  title: 'Mobile/HeaderBlock',
};

export const Theme1 = () => (
  <div style={{ width: '375px' }}>
    <HeaderBlock>
      <div className={cx('bold', 'text-one-row')}>Danh mục sản phẩm</div>
      <Link color="#848788" className={cx('flex-center')} to="/">
        <span>Xem tất cả</span>
        <Icon color="#848788">icon vns-Forward</Icon>
      </Link>
    </HeaderBlock>
    <Divider />
  </div>
);

export const Theme2 = () => (
  <div style={{ width: '375px' }}>
    <HeaderBlock>
      <div className={cx('bold', 'fs20', 'text-one-row')}>
        Danh mục sản phẩm
      </div>
      <Link color="#848788" className={cx('flex-center')} to="/">
        <span>Xem tất cả</span>
        <Icon color="#848788">icon vns-Forward</Icon>
      </Link>
    </HeaderBlock>
  </div>
);

export const Theme3 = () => (
  <div style={{ width: '375px' }}>
    <HeaderBlock backgroundColor="f6f6f6">
      <div
        style={{ color: '#848788' }}
        className={cx('title', 'text-uppercase', 'text-one-row')}
      >
        Địa chỉ nhận hàng
      </div>
      <Link to="/">Thay đổi</Link>
    </HeaderBlock>
  </div>
);
