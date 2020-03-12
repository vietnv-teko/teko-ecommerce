import * as React from 'react';
import ProductItem from './ProductItem';

export default {
  title: 'ProductItem',
  component: ProductItem,
};

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

export const GridItem = () => <ProductItem type="grid" product={product} />;
export const ListItem = () => <ProductItem type="list" product={product} />;
