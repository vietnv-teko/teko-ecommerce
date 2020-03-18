import React from "react";
import styles from './CategoryItem.module.scss';
import classNames from 'classnames/bind';
import Link from "components/Common/Link";
import LazyImage from "components/Common/LazyImage";

let cx = classNames.bind(styles);

interface ICategoryItem {
  link: string,
  icon: string,
  name: string,
  className?: string
}

const CategoryItem: React.FC<ICategoryItem> = props => {
  const { link, icon, name, className } = props;
  return (
    <div className={cx("category-item", className)}>
      <Link href={link}>
        <div className={cx("category-icon")}>
          <LazyImage height={48} src={icon} contain />
        </div>
        <div className={cx("category-name")}>{name}</div>
      </Link>
    </div>
  )
}

export default CategoryItem;