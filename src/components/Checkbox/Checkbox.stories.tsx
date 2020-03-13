import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
};

export const DefaultCheckbox = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(ev: any) => setChecked(ev.target.checked)}
      label="Laptop"
    />
  );
};

export const LargeCheckbox = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(ev: any) => setChecked(ev.target.checked)}
      color="#e00315"
      size={28}
    />
  );
};
