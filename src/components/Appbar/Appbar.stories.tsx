import React from 'react';
import { action } from '@storybook/addon-actions';
import Appbar from './Appbar';

export default {
  title: 'Appbar',
};

export const AppbarWith2Icons = () => {
  return (
    <Appbar
      startIcon={
        <i
          className="icon vns-Back"
          onClick={action('back')}
          style={{ fontSize: '24px' }}
        />
      }
      middle="Giỏ hàng"
      endIcon={
        <i
          className="icon vns-Cart"
          onClick={action('go to cart')}
          style={{ fontSize: '24px' }}
        />
      }
      position="sticky"
    />
  );
};

export const AppbarStartIcon = () => {
  return (
    <Appbar
      startIcon={
        <i
          className="icon vns-Back"
          onClick={action('back')}
          style={{ fontSize: '24px' }}
        />
      }
      middle="Giỏ hàng"
      position="sticky"
    />
  );
};

export const AppbarEndIcon = () => {
  return (
    <Appbar
      middle="Giỏ hàng"
      endIcon={
        <i
          className="icon vns-Cart"
          onClick={action('go to cart')}
          style={{ fontSize: '24px' }}
        />
      }
      position="sticky"
    />
  );
};

export const TextAppbar = () => {
  return <Appbar middle="Giỏ hàng" />;
};
