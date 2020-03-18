import React from 'react';
import MiniProductItem from 'components/Common/MiniProductItem';
export default {
  title: 'Common/MiniProductItem',
  component: MiniProductItem,
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
export const Default = () => {
  return (
    <div style={{ width: '90px' }}>
      <MiniProductItem
        img={product.images[0].url}
        price={product.price.sellPrice}
        discount="15%"
      />
    </div>
  );
};
