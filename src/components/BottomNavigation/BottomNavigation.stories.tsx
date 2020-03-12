import React from 'react';
import BottomNavigation from './BottomNavigation';
import { BrowserRouter } from 'react-router-dom';
import Container from '../Container';

export default {
  title: 'BottomNavigation',
  decorators: [
    (storyFn: any) => (
      <Container>
        <BrowserRouter>{storyFn()}</BrowserRouter>
      </Container>
    ),
  ],
};

let navItems = [
  {
    label: 'Trang chủ',
    activeIcon: <i className="icon vns-Home-Active" />,
    inactiveIcon: <i className={'icon vns-Home-Inactive'} />,
    path: '/',
  },
  {
    label: 'Danh mục',
    activeIcon: <i className="icon vns-Category-Active" />,
    inactiveIcon: <i className={'icon vns-Category-Inactive'} />,
    path: '/categories',
  },
  {
    label: 'Giỏ hàng',
    activeIcon: <i className="icon vns-Shopping-cart-Active" />,
    inactiveIcon: <i className={'icon vns-Shopping-cart'} />,
    path: '/cart-home',
  },
  {
    label: 'Thông báo',
    activeIcon: <i className="icon vns-Notification-fill" />,
    inactiveIcon: <i className={'icon vns-Notification'} />,
    path: '/notification',
  },
  {
    label: 'Tài khoản',
    activeIcon: <i className="icon vns-Account-Active" />,
    inactiveIcon: <i className={'icon vns-Account-Inactive'} />,
    path: '/account',
  },
];

export const PrimaryNavigation = () => (
  <BottomNavigation navItems={navItems} color={'primary'} showLabels />
);

export const SecondaryNavigationShowLabels = () => (
  <BottomNavigation navItems={navItems} color={'secondary'} />
);
