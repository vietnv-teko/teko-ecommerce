import React from 'react';
import List from './List';
import ListItem from '../ListItem';
import Divider from '../Divider';
import { action } from '@storybook/addon-actions';
import ProductItem from 'components/ProductItem';
export default {
  title: 'List',
  component: List,
};

export const Default = () => {
  const product = {
    sku: '123',
    name: 'Laptop ASUS ROG Strix G G531GD-AL034T',
    price: {
      sellPrice: 23490000,
      supplierSalePrice: 24990000,
    },
    images: [
      {
        priority: 1,
        path: '',
        url:
          'https://lh3.googleusercontent.com/apZl8ZCL6qhElaV_a2oM11GntPHaaOUXmXTtHFYfCgsEzBJnKnoFlv-rhF_VUhqWUgz8Q7rnNjpyoCt9syY',
      },
    ],
  };
  return (
    <div style={{ width: '300px' }}>
      <List>
        <ListItem onClick={action('Click A')}>
          <ProductItem type="list" product={product} />
        </ListItem>
        <Divider />
        <ListItem onClick={action('Click A')}>
          <ProductItem type="list" product={product} />
        </ListItem>
        <Divider />
        <ListItem onClick={action('Click A')}>
          <ProductItem type="list" product={product} />
        </ListItem>
        <Divider />
        <ListItem onClick={action('Click A')}>
          <ProductItem type="list" product={product} />
        </ListItem>
      </List>
    </div>
  );
};
