import React from 'react';
import LazyImage from './LazyImage';

export default {
  title: 'Image',
  component: LazyImage,
};

export const Default = () => (
  <div>
    <p>
      ảnh dưới là lazy load, dòng này sẽ xuất hiện trước ảnh, nhưng nhiều lúc
      mạng nhanh quá nên xuất hiện đồng thời luôn
    </p>
    <LazyImage
      src="https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/9737454830/7579648364.jpg"
      cover
    />
    <LazyImage
      src="https://bizweb.dktcdn.net/100/352/755/files/tui-vai-bo-chong-nuoc-quai-da-30-ef8093a1b5224849ac5e4b748d39d0c2-master.jpg?v=1581516213748"
      cover
    />
    <LazyImage src="https://bizweb.dktcdn.net/100/352/755/files/tui-vai-bo-chong-nuoc-quai-da-29-3329d4db10014892b6451cb3e4eb0122-master.jpg?v=1581516202985" />
    <LazyImage
      src="https://bizweb.dktcdn.net/100/352/755/files/tui-vai-bo-chong-nuoc-quai-da-28-dc1416aeadc7406eabe6a3612085b8c2-master.jpg?v=1581516175272"
      cover
    />
  </div>
);
