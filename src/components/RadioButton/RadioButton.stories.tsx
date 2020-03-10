import React from 'react';
import { action } from '@storybook/addon-actions';
import RadioButton from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

export const Default = () => {
  return <RadioButton color="red" checked onClick={action('clicked')} />;
};
