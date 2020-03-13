import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const DefaultButton = () => <Button>Default Button</Button>;

export const SmallButton = () => (
  <Button
    size="small"
    variant="outlined"
    rippleColor={'rgba(22, 105, 168, 0.2)'}
  >
    Small Button
  </Button>
);
export const LargeButton = () => (
  <Button
    size="large"
    variant="contained"
    rippleColor={'rgba(255, 255, 255, 0.4)'}
  >
    Large Button
  </Button>
);

export const SecondaryOutlinedButton = () => (
  <Button
    size="medium"
    variant="outlined"
    rippleColor={'rgba(224, 3, 21, 0.2)'}
    color={'#d60315'}
  >
    Secondary Outlined Button
  </Button>
);
