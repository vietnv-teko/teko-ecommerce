import React from 'react';
import CategoryList from 'components/Mobile/CategoryList';

export default {
  title: "Mobile/CategoryList"
}

const categoryItems = [
  {
    name: "Mẹ & Bé",
    icon: "https://img.vnshop.vn/height/128/media/menu-icons/001/001-0.png",
    link: "#"
  },
  {
    name: "Thực phẩm - Bánh kẹo",
    icon: "https://img.vnshop.vn/height/128/media/menu-icons/009/009-0.png",
    link: "#"
  },
  {
    name: "Nhà Cửa - Đời Sống",
    icon: "https://img.vnshop.vn/height/128/media/menu-icons/005,006/005,006-0.png",
    link: "#"
  },
  {
    name: "Mỹ Phẩm & Làm Đẹp",
    icon: "https://img.vnshop.vn/height/128/media/menu-icons/003/003-0.png",
    link: "#"
  },
  {
    name: "Đồ Điện Gia Dụng",
    icon: "https://img.vnshop.vn/height/128/media/menu-icons/008/008-0.png",
    link: "#"
  },
  {
    name: "Chăm Sóc Sức Khoẻ",
    icon: "https://img.vnshop.vn/height/128/media/menu-icons/004/004-0.png",
    link: "#"
  }
]

export const Default = () => {
  return (
    <div style={{ width: '375px' }}>
      <CategoryList categoryItems={categoryItems} />
    </div>
  )
}