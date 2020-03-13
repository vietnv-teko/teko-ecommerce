import React, { useState } from 'react';
import HorizontalScrollingTabs from './HorizontalScrollingTabs';

export default {
  title: 'HorizontalScrollingTabs',
  component: HorizontalScrollingTabs,
};

export const Default = () => {
  const [activeTab, setActiveTab] = useState(0);
  const categoryList = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Mẹ & bé' },
    { id: 3, name: 'Thực phẩm - bánh kẹo' },
    { id: 4, name: 'Mỹ phẩm - làm đẹp' },
    { id: 5, name: 'Nhà cửa - đời sống' },
    { id: 6, name: 'Đồ điện - gia dụng' },
  ];
  return (
    <HorizontalScrollingTabs
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      list={categoryList}
      smoothTab={true}
    />
  );
};
