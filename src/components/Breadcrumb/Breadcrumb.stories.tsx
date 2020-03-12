import React from 'react';
import Breadcrumb from './Breadcrumb';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {
  const linkList = ['Home', 'Picture', 'Summmer 15', 'Italy'];
  return (
    <>
      <Breadcrumb linkList={linkList} onClick={action('clicked')} />
    </>
  );
};
