import React from 'react';
import Image from './Image';

export default {
  title: 'Image',
  component: Image,
};

export const Vertical = () => (
  <div>
    <p>
      ảnh dưới là lazy load, dòng này sẽ xuất hiện trước ảnh, nhưng nhiều lúc
      mạng nhanh quá nên xuất hiện đồng thời luôn
    </p>
    <Image
      src={
        'https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/9737454830/7579648364.jpg'
      }
      alt={'hihi'}
    />
  </div>
);
