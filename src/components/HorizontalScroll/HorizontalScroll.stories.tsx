import React from 'react';
import HorizontalScroll from './HorizontalScroll';
import ProductItem from 'components/ProductItem/index';
export default {
  title: 'HorizontalScroll',
  component: HorizontalScroll,
};

const indents: any = [];

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
for (let i = 0; i < 10; i++) {
  indents.push(<ProductItem type="grid" product={product} />);
}

export const Default = () => (
  <HorizontalScroll slidesPerView={5}>{indents}</HorizontalScroll>
);