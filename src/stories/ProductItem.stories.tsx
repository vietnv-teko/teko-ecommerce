import React from 'react';
import ProductItem from 'components/Common/ProductItem';

export default {
  title: 'Common/ProductItem',
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

export const GridItem = () => (
  <div style={{ width: '400px' }}>
    <ProductItem
      type="grid"
      img={product.images[0].url}
      discount="5%"
      name={product.name}
      finalPrice={product.price.sellPrice}
      oldPrice={product.price.supplierSalePrice}
      sellerShippingInfo="Miễn phí vận chuyển toàn quốc"
    />
  </div>
);
export const ListItem = () => (
  <div style={{ width: '400px' }}>
    <ProductItem
      type="list"
      img={product.images[0].url}
      discount="5%"
      name={product.name}
      finalPrice={product.price.sellPrice}
      oldPrice={product.price.supplierSalePrice}
      sellerShippingInfo="Miễn phí vận chuyển toàn quốc"
    />
  </div>
);
