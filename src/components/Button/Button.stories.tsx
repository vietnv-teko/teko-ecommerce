import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const DefaultButton = () => <Button>Default Button</Button>;

export const SmallButton = () => <Button size="small">Small Button</Button>;
export const LargeButton = () => <Button size="large">Large Button</Button>;

export const PrimaryContainedButton = () => (
  <Button size="medium" color="primary" variant="contained">
    Primary Contained Button
  </Button>
);
export const SecondaryOutlinedButton = () => (
  <Button size="medium" color="secondary" variant="outlined">
    Secondary Outlined Button
  </Button>
);
