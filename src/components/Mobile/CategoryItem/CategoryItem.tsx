import React from 'react';
import styles from './CategoryItem.module.scss';
import classNames from 'classnames/bind';
import LazyImage from 'components/Common/LazyImage';
import NewLink from 'components/Common/NewLink';

let cx = classNames.bind(styles);

interface ICategoryItem {
  icon: string;
  name: string;
  className?: string;
  to?: any;
}

const CategoryItem: React.FC<ICategoryItem> = props => {
  const { icon, name, className, to } = props;
  return (
    <NewLink to={to} className={cx('category-item', className)}>
      <div className={cx('category-icon')}>
        <LazyImage width={48} height={48} src={icon} contain />
      </div>
      <div className={cx('category-name')}>{name}</div>
    </NewLink>
  );
};

export default CategoryItem;
