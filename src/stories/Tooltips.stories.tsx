import React from 'react';
import Tooltips from 'components/Desktop/Tooltips';

export default {
  title: 'Desktop/Tooltips',
  component: Tooltips,
};

export const Default = () => (
  <Tooltips
    content="xin chào"
    text="bạn đã hover, đây là tooltips"
    position="right"
    size={12}
  />
);
