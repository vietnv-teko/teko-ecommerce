import React from 'react';
import Link from './Link';
export default {
  title: 'Link',
  component: Link,
};

export const Default = () => {
  return <Link text="vnshop" href="https://vnshop.vn" color="red" />;
};
export const Hover = () => {
  return (
    <Link
      text="vnshop"
      href="https://vnshop.vn"
      color="black"
      underline="hover"
    />
  );
};
export const underline = () => {
  return (
    <Link
      text="vnshop"
      href="https://vnshop.vn"
      color="blue"
      underline="always"
    />
  );
};
