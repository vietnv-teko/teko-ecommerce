import React from 'react';
import Hover from 'components/Desktop/Hover';

export default {
  title: 'Desktop/Hover',
  component: Hover,
};

export const Default = () => (
  <Hover outset="0px 0px 8px 0px" rgbaColor="rgba(0, 0, 0, 0.3)">
    <div style={{ width: '100px', height: '50px' }}>
      <div style={{ margin: 'auto' }}>Hover me!</div>
    </div>
  </Hover>
);
