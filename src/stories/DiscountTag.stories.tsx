import React from 'react';
import DiscountTag from 'components/Common/DiscountTag';
import LazyImage from 'components/Common/LazyImage';

export default {
  title: 'Common/DiscountTag',
};

export const TagInImage = () => (
  <div style={{ width: '200px' }}>
    <DiscountTag top="0px" right="0px" theme={1} value="12%">
      <LazyImage
        contain
        src="https://lh3.googleusercontent.com/WAcWPfLeLfYoofRcPvLcxNtvkr7tYb6vwO2GMSppqZu-8W_ghQ4rWXcdPV5tg7lZ1L7Yagtqu_tqyM8X3w"
      />
    </DiscountTag>
  </div>
);
