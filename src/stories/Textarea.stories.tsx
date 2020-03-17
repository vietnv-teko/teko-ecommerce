import React from 'react';
import Textarea from 'components/Common/Textarea';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Common/Textarea',
  component: Textarea,
};

export const Default = () => {
  return (
    <Textarea
      cols={50}
      rows={3}
      placeholder={'typing your text here...'}
      onChange={action('onChanged')}
    />
  );
};
