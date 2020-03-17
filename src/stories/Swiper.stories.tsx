import * as React from 'react';
import Swiper from 'components/Common/Swiper';

export default {
  title: 'Common/Swiper',
};

export const Default = () => (
  <div style={{ width: '500px' }}>
    <Swiper>{['hihi', 'haha']}</Swiper>
  </div>
);
