import React from 'react';
import NewLink from 'components/Common/NewLink';
export default {
  title: 'Common/NewLink',
  component: NewLink,
};

export const Default = () => {
  return (
    <NewLink href="https://vnshop.vn" color="red">
      vnshop
    </NewLink>
  );
};
export const Hover = () => {
  return (
    <NewLink href="https://vnshop.vn" color="black" underline="hover">
      vnshop
    </NewLink>
  );
};
export const Underline = () => {
  return (
    <NewLink color="blue" underline="always">
      vnshop
    </NewLink>
  );
};
