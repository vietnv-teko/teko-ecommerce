import React from 'react';
import Chips from './Chips';
import classname from 'classnames/bind';
import styles from './Chips.module.css';
import { action } from '@storybook/addon-actions';

let cx = classname.bind(styles);
export default {
  title: 'Chips',
  component: Chips,
};

export const Default = () => (
  <Chips
    content={'Default Chips'}
    variant="default"
    onClick={action('clicked')}
  />
);
export const Custom = () => (
  <Chips
    content="Custom chip"
    variant="outlined"
    onDelete={action('onDelete')}
    className={cx('white-background')}
  />
);
