import * as React from 'react';
import ContentLoader from 'components/Common/ContentLoader/ContentLoader';

export default {
  title: 'Common/ContentLoader',
};

export const Default = () => <ContentLoader height={100} width={100} />;
export const ProductItem = () => (
  <div style={{ width: '150px' }}>
    <ContentLoader height={150} mb={8} />
    <ContentLoader height={20} mb={8} />
    <ContentLoader height={10} mb={8} />
    <ContentLoader height={10} mb={8} />
  </div>
);
