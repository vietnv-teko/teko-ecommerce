import React from 'react';
import styles from './HorizontalProductList.module.scss';
import classNames from 'classnames/bind';
import HeaderBlock from '../HeaderBlock';
import NewLink from 'components/Common/NewLink';
import Icon from 'components/Common/Icon';
import { Divider } from 'index';
import HorizontalScroll from '../HorizontalScroll';

let cx = classNames.bind(styles);

interface IHorizontalProductList {
  title?: string;
  link?: string;
}

const HorizontalProductList: React.FC<IHorizontalProductList> = props => {
  const { title, link, children } = props;

  return (
    <div className={cx('horizontal-product-list')}>
      <HeaderBlock>
        <div className={cx('bold')}>{title}</div>
        {link && (
          <NewLink color="#848788" className={cx('flex-center')} to={link}>
            <span>Xem tất cả</span>
            <Icon color="#848788">icon vns-Forward</Icon>
          </NewLink>
        )}
      </HeaderBlock>
      <Divider />
      <HorizontalScroll className={cx('p16')} slidesPerView={2.5}>
        {children}
      </HorizontalScroll>
    </div>
  );
};

export default HorizontalProductList;
