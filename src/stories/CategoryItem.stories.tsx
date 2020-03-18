import React from 'react';
import CategoryItem from 'components/Mobile/CategoryItem';

export default {
  title: "Mobile/CategoryItem"
}

export const Default = () => {
  return (
    <div style={{ width: '100px' }}>
      <CategoryItem icon="https://img.vnshop.vn/height/128/media/menu-icons/001/001-0.png" name="Mẹ & Bé" link="#" />
    </div>
  )
}