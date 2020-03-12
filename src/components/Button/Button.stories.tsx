import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const DefaultButton = () => <Button>Default Button</Button>;

export const SmallButton = () => (
  <Button size="small" variant="outlined">
    Small Button
  </Button>
);
export const LargeButton = () => (
  <Button size="large" variant="contained">
    Large Button
  </Button>
);

export const SecondaryOutlinedButton = () => (
  <Button size="medium" color="secondary" variant="outlined">
    Secondary Outlined Button
  </Button>
);
