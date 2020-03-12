import React from 'react';
import Divider from './Divider';
import classname from 'classnames/bind';
import styles from './Divider.module.scss';
let cx = classname.bind(styles);

export default {
  title: 'Divider',
  component: Divider,
};

export const Default = () => {
  return (
    <>
      <span className={cx('item')}>The first item</span>
      <Divider />
      <span className={cx('item')}>The second item</span>
      <Divider />
      <span className={cx('item')}>The third item</span>
    </>
  );
};
export const Middle = () => {
  return (
    <div className={cx('story-middle')}>
      <span className={cx('item', 'item-midle')}>The first item</span>
      <Divider variant="middle" />
      <span className={cx('item', 'item-midle')}>The second item</span>
      <Divider variant="middle" />
      <span className={cx('item', 'item-midle')}>The third item</span>
    </div>
  );
};
export const Vertical = () => {
  return (
    <div className={cx('item-flex')}>
      <span>The first item</span>
      <Divider variant="vertical" />
      <span>The second item</span>
      <Divider variant="vertical" />
      <span>The third item</span>
    </div>
  );
};
