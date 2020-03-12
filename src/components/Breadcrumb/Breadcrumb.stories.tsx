import React from 'react';
import Breadcrumb from './Breadcrumb';
import Link from '../Link';
export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {
  return (
    <>
      <Breadcrumb separator="/">
        <Link href="#" text="Vnshop" color="#22a0ff" underline="hover" />
        <Link href="#" color="#22a0ff" text="Đồ gia dụng" underline="hover" />
        <span>Nồi cơm điện Sunhouse</span>
      </Breadcrumb>
    </>
  );
};
