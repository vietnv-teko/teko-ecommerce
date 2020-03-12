import React from 'react';
import Checkbox from './Checkbox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Default = () => {
  return (
    <Checkbox
      checked
      onClick={action('clicked')}
      color="red"
      label="checkbox 1"
    />
  );
};
