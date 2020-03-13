import React from 'react';
import List from './List';
import ListItem from '../ListItem';
import Divider from '../Divider';
import { action } from '@storybook/addon-actions';
export default {
  title: 'List',
  component: List,
};

export const Default = () => {
  return (
    <List>
      <ListItem middle="AAA" onClick={action('Click A')} />
      <Divider />
      <ListItem left="BBB" onClick={action('Click B')} />
      <Divider />
      <ListItem middle="CCC" onClick={action('Click C')} />
      <Divider />
      <ListItem middle="DDD" onClick={action('Click D')} />
    </List>
  );
};
