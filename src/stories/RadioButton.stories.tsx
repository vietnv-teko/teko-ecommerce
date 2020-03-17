import React, { useState } from 'react';
import RadioButton from 'components/Common/RadioButton';
export default {
  title: 'RadioButton',
  component: RadioButton,
};

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <>
      <RadioButton
        color="red"
        checked={selectedValue === 1}
        onClick={() => setSelectedValue(1)}
        label="option 1"
      />
      <RadioButton
        color="red"
        checked={selectedValue === 2}
        onClick={() => setSelectedValue(2)}
        label="option 2"
      />
      <RadioButton
        color="red"
        checked={selectedValue === 3}
        onClick={() => setSelectedValue(3)}
        label="option 3"
      />
    </>
  );
};
