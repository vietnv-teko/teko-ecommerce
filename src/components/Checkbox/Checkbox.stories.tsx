import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
};

export const PrimaryCheckbox = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(ev: any) => setChecked(ev.target.checked)}
      label="Laptop"
    />
  );
};

export const SecondaryCheckbox = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(ev: any) => setChecked(ev.target.checked)}
      color="secondary"
      label="SSD"
    />
  );
};
export const LargeCheckbox = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(ev: any) => setChecked(ev.target.checked)}
      color="primary"
      size="large"
      label="Ram"
    />
  );
};
export const SmallCheckbox = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(ev: any) => setChecked(ev.target.checked)}
      color="primary"
      size="small"
    />
  );
};
