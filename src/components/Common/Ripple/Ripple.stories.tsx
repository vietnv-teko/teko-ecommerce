import React from 'react';
import Ripple from '.';

export default {
  title: 'Ripple',
};

export const Default = () => {
  return (
    <div
      style={{
        height: '100px',
        width: '300px',
        position: 'relative',
        backgroundColor: 'red',
      }}
    >
      click <Ripple />
    </div>
  );
};
