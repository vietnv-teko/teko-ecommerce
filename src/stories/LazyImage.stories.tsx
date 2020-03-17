import React from 'react';
import LazyImage from 'components/Common/LazyImage';

export default {
  title: 'LazyImage',
  component: LazyImage,
};

export const DefaultImage = () => (
  <LazyImage src="https://1.img-dpreview.com/files/p/TS1200x900~sample_galleries/9737454830/7579648364.jpg" />
);

export const ContainImage = () => {
  return (
    <LazyImage
      height={200}
      src="https://bizweb.dktcdn.net/100/352/755/files/tui-vai-bo-chong-nuoc-quai-da-30-ef8093a1b5224849ac5e4b748d39d0c2-master.jpg?v=1581516213748"
      contain
    />
  );
};

export const ImageWithHeight = () => {
  return (
    <div>
      <div>Height: 100px</div>
      <LazyImage
        height={100}
        contain
        src="https://bizweb.dktcdn.net/100/352/755/files/tui-vai-bo-chong-nuoc-quai-da-30-ef8093a1b5224849ac5e4b748d39d0c2-master.jpg?v=1581516213748"
      />
    </div>
  );
};

export const ImageWithRatio = () => {
  return (
    <div>
      <div>Ratio: width/height = 3/1</div>
      <LazyImage
        aspectRatio={3}
        src="https://bizweb.dktcdn.net/100/352/755/files/tui-vai-bo-chong-nuoc-quai-da-30-ef8093a1b5224849ac5e4b748d39d0c2-master.jpg?v=1581516213748"
      />
    </div>
  );
};
