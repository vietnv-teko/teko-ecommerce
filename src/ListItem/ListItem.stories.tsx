import React from 'react';
import ListItem from './ListItem';
import Checkbox from '../components/Checkbox';
import { action } from '@storybook/addon-actions';
export default {
  title: 'ListItem',
  component: ListItem,
};

export const Default = () => {
  return (
    <ListItem
      label="Checkbox"
      left={<Checkbox onClick={action('clicked')} color="red" />}
    />
  );
};
