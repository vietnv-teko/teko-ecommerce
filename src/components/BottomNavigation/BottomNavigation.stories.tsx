import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import BottomNavigation from './BottomNavigation';

export default {
  title: 'BottomNavigation',
};

let navItems = [
  {
    label: 'Trang chủ',
    activeIcon: <i className="icon vns-Home-Active" />,
    inactiveIcon: <i className="icon vns-Home-Inactive" />,
    path: '/',
  },
  {
    label: 'Danh mục',
    activeIcon: <i className="icon vns-Category-Active" />,
    inactiveIcon: <i className="icon vns-Category-Inactive" />,
    path: '/categories',
  },
  {
    label: 'Giỏ hàng',
    activeIcon: <i className="icon vns-Shopping-cart-Active" />,
    inactiveIcon: <i className="icon vns-Shopping-cart" />,
    path: '/cart-home',
  },
  {
    label: 'Thông báo',
    activeIcon: <i className="icon vns-Notification-fill" />,
    inactiveIcon: <i className="icon vns-Notification" />,
    path: '/notification',
  },
  {
    label: 'Tài khoản',
    activeIcon: <i className="icon vns-Account-Active" />,
    inactiveIcon: <i className="icon vns-Account-Inactive" />,
    path: '/account',
  },
];

export const PrimaryNavigation = () => {
  let [active, setActive] = useState(0);

  return (
    <BottomNavigation
      navItems={navItems}
      active={active}
      //@ts-ignore
      onChange={(event: any, value: any) => {
        action('onChange value');
        setActive(value);
      }}
    />
  );
};

export const SecondaryNavigationShowLabels = () => {
  let [active, setActive] = useState(0);

  return (
    <BottomNavigation
      navItems={navItems.slice(0, 4)}
      color="#e00315"
      active={active}
      //@ts-ignore
      onChange={(event: any, value: any) => {
        action('onChange value');
        setActive(value);
      }}
      hideLabels={false}
    />
  );
};
