import React from 'react';
import FlashSaleItem from 'components/Common/FlashSaleItem';

export default {
  title: 'Common/FlashSaleItem',
  component: FlashSaleItem,
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
  flashSales: [
    {
      channel: 'vnshop_online',
      terminal: 'vnshop_app',
      used: 0,
      total: 5,
      discountPercent: 2,
      definition: {
        id: 683,
        startedAt: '2020-03-17T17:00:00+00:00',
        endedAt: '2020-03-18T16:59:41+00:00',
        name: 'Giờ vàng 18/3 - Khung 11h',
        govRegister: false,
        description: '',
        timeRanges: [{ start: '11:00:00', end: '15:59:00' }],
        paymentMethods: ['all'],
        type: {
          id: 1,
          code: 'GOLDEN_TIME',
          name: 'Giờ vàng',
        },
      },
    },
  ],
};

export const Default = () => (
  <div style={{ width: '400px' }}>
    <FlashSaleItem
      img={product.images[0].url}
      discount="5%"
      price={product.price.sellPrice}
      flashSale={product.flashSales[0]}
    />
  </div>
);
