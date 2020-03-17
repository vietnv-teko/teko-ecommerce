import React, { useState } from 'react';
import BottomNavigation from 'components/Mobile/BottomNavigation';
import BottomNavigationItem from 'components/Mobile/BottomNavigationItem';

export default {
  title: 'Mobile/BottomNavigation',
};

let navItems = [
  {
    label: 'Trang chủ',
    activeIcon: <i className="icon vns-Home-Active" />,
    inActiveIcon: <i className="icon vns-Home-Inactive" />,
    path: '/',
  },
  {
    label: 'Danh mục',
    activeIcon: <i className="icon vns-Category-Active" />,
    inActiveIcon: <i className="icon vns-Category-Inactive" />,
    path: '/categories',
  },
  {
    label: 'Giỏ hàng',
    activeIcon: <i className="icon vns-Shopping-cart-Active" />,
    inActiveIcon: <i className="icon vns-Shopping-cart" />,
    path: '/cart-home',
    badgeValue: 12,
  },
  {
    label: 'Thông báo',
    activeIcon: <i className="icon vns-Notification-fill" />,
    inActiveIcon: <i className="icon vns-Notification" />,
    path: '/notification',
  },
  {
    label: 'Tài khoản',
    activeIcon: <i className="icon vns-Account-Active" />,
    inActiveIcon: <i className="icon vns-Account-Inactive" />,
    path: '/account',
  },
];

export const Default = () => {
  const [active, setActive] = useState(0);
  return (
    <BottomNavigation>
      {navItems.map((item: any, index: number) => (
        <BottomNavigationItem
          key={index}
          navItem={item}
          active={index === active}
          onClick={() => setActive(index)}
          badgeValue={item.badgeValue}
        />
      ))}
    </BottomNavigation>
  );
};
