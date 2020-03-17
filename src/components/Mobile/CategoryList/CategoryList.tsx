import React from "react";
import styles from './CategoryList.module.scss';
import classNames from 'classnames/bind';
import Grid from "components/Common/Grid";
import CategoryItem from "components/Mobile/CategoryItem";

let cx = classNames.bind(styles);

interface ICategoryList {
  categoryItems: any[]
}

const ICategoryList: React.FC<ICategoryList> = props => {
  const { categoryItems } = props;

  if (!categoryItems.length) {
    return null;
  }
  return (
    <Grid justify="center" align="center" rowGap={10} colGap={10} className={cx("category-list")} colNum={4}>
      {categoryItems.map((item: any, index: number) => (
        <CategoryItem key={index} name={item.name} icon={item.icon} link={item.link} />
      ))}
    </Grid>
  )
}

export default ICategoryList;