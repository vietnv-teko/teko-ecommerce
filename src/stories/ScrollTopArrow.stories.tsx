import React from 'react';
import ScrollTopArrow from 'components/Common/ScrollTopArrow';
export default {
  title: 'Common/ScrollTopArrow',
  component: ScrollTopArrow,
};

export const Default = () => {
  return (
    <div style={{ height: '9999px' }}>
      <ScrollTopArrow scrollHeight={1000} color="red" size={24} />
    </div>
  );
};
