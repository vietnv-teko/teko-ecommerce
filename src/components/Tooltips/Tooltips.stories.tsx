import React from 'react';
import Tooltips from './Tooltips';

export default {
  title: 'Tooltips',
  component: Tooltips,
};

export const Default = () => (
  <Tooltips
    content="xin chào"
    text="bạn đã hover, đây là tooltips"
    position="right"
    fontSize={12}
  />
);
