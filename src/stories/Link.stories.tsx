import React from 'react';
import Link from 'components/Common/Link';
import { browserHistory } from 'components/Common/Link/constant';
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
export const Underline = () => {
  return (
    <Link
      text="vnshop"
      color="blue"
      underline="always"
      onClick={() => browserHistory.replace('/?path=/story/divider--default')}
    />
  );
};
