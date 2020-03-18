import React from 'react';
import Breadcrumb from 'components/Desktop/Breadcrumb';
import NewLink from 'components/Common/NewLink';
export default {
  title: 'Desktop/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {
  return (
    <>
      <Breadcrumb separator="/">
        <NewLink to="#" color="#22a0ff" underline="hover">
          Vnshop
        </NewLink>
        <NewLink to="#" color="#22a0ff" underline="hover">
          Đồ gia dụng
        </NewLink>
        <span>Nồi cơm điện Sunhouse</span>
      </Breadcrumb>
    </>
  );
};
