import React from 'react';
import Grid from './Grid';

export default {
  title: 'Grid',
  component: Grid,
};

export const Default = () => (
  <Grid
    content={['xin chào', 'tất cả', 'mọi người', ':D', '<3']}
    justify="center"
    align="middle"
    colNum={4}
    rowGap={20}
    colGap={20}
    colHeight={80}
  />
);
