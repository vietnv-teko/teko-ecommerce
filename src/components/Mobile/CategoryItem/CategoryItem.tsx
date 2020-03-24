import React from 'react';
import styles from './CategoryItem.module.scss';
import classNames from 'classnames/bind';
import LazyImage from 'components/Common/LazyImage';

let cx = classNames.bind(styles);

type ICategoryItem = {
  icon: string;
  name: string;
  className?: string;
  to?: any;
  onClick?: () => void;
  trackContentName?: string;
  index?: number;
  catId?: number;
  style?: any;
};

const CategoryItem = ({
  icon,
  name,
  className,
  onClick,
  trackContentName,
  index,
  catId,
  ...rest
}: ICategoryItem) => {
  return (
    <div onClick={onClick} className={cx('category-item', className)} {...rest}>
      <div className={cx('category-icon')}>
        <LazyImage width={48} height={48} src={icon} contain />
      </div>
      <div className={cx('category-name')}>{name}</div>
    </div>
  );
};

export default CategoryItem;
