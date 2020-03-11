import React from 'react';
import Tooltips from './Tooltips';

export default {
  title: 'Tooltips',
  component: Tooltips,
};

export const Vertical = () => (
  <Tooltips
    content={'hahaha'}
    text={'bạn đã hover, đây là tooltips'}
    position={'right'}
    tFsize={12}
  />
);
