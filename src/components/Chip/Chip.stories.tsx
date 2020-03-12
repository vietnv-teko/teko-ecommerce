import React from 'react';
import Chip from './Chip';
import classname from 'classnames/bind';
import styles from './Chip.module.css';
import { action } from '@storybook/addon-actions';

let cx = classname.bind(styles);
export default {
  title: 'Chip',
  component: Chip,
};

export const Default = () => (
  <Chip
    content={'Default Chip'}
    variant="default"
    onClick={action('clicked')}
  />
);
export const Custom = () => (
  <Chip
    content="Custom chip"
    variant="outlined"
    onDelete={action('onDelete')}
    className={cx('white-background')}
  />
);
