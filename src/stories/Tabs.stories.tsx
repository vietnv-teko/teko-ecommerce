import React, { useState } from 'react';
import Tabs from 'components/Common/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const Default = () => {
  const [activeTab, setActiveTab] = useState(1);
  const categoryList = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Mẹ & bé' },
    { id: 3, name: 'Thực phẩm - bánh kẹo' },
    { id: 4, name: 'Mỹ phẩm - làm đẹp' },
    { id: 5, name: 'Nhà cửa - đời sống' },
    { id: 6, name: 'Đồ điện - gia dụng' },
  ];
  return (
    <Tabs
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      list={categoryList}
      smoothTab={true}
    />
  );
};
