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
        'https://img.vnshop.vn/height/400/media/catalog_v2/media/86/98/1569643471.9482455_190901143.jpg',
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
