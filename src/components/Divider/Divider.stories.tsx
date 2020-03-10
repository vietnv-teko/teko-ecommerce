import * as React from 'react';
import Divider from './Divider';

export default {
  title: 'Divider',
  component: Divider,
};

export const Vertical = () => <Divider />;

export const Horizontal = () => <Divider props1="2" />;
