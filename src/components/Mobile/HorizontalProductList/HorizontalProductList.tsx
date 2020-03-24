import React from 'react';
import styles from './HorizontalProductList.module.scss';
import classNames from 'classnames/bind';
import HeaderBlock2 from 'components/Mobile/HeaderBlock2';
import Icon from 'components/Common/Icon';
import Divider from 'components/Common/Divider';
import HorizontalScroll from '../HorizontalScroll';
import ContentLoader from 'components/Common/ContentLoader';

let cx = classNames.bind(styles);

interface IHorizontalProductList {
  title?: string;
  className?: string;
  onClick?: () => void | undefined;
  loading: boolean;
}

const HorizontalProductList: React.FC<IHorizontalProductList> = props => {
  const { title = '', children, className, onClick, loading } = props;

  let preload = [];
  for (var i = 0; i < 3; i++) {
    preload.push(
      <div className={cx('p10')} key={i}>
        <ContentLoader height="100%" />
        <ContentLoader height="12px" mt={8} />
        <ContentLoader height="12px" width="80%" mt={8} />
        <ContentLoader height="12px" width="70%" mt={8} />
        <ContentLoader height="12px" width="70%" mt={8} />
      </div>,
    );
  }

  if (!loading && Array.isArray(children) && !children.length) {
    return null;
  }

  return (
    <div className={cx('horizontal-product-list', className)}>
      <HeaderBlock2
        title={title}
        action={
          onClick &&
          Array.isArray(children) &&
          children.length > 3 && {
            content: (
              <>
                <span style={{ fontSize: '14px' }}>Xem tất cả</span>
                <Icon color="#848788">icon vns-Forward</Icon>
              </>
            ),
            onClick: onClick,
          }
        }
      />
      <Divider />
      <HorizontalScroll className={cx('p6')} slidesPerView={2.5}>
        {loading ? preload : children}
      </HorizontalScroll>
    </div>
  );
};

export default HorizontalProductList;
