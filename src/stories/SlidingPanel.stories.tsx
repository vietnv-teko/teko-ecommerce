import React, { useState } from 'react';
import SlidingPanel from 'components/Mobile/SlidingPanel';
import Button from 'components/Common/Button';
import Appbar from 'components/Mobile/Appbar';

export default {
  title: 'Mobile/SlidingPanel',
};

export const DefaultPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '180vh' }}>
      <Button onClick={() => setOpen(true)}>Open Panel</Button>
      <SlidingPanel open={open} onClose={() => setOpen(false)}>
        <Appbar
          startIcon={
            <i
              className="icon vns-Close-X"
              onClick={() => setOpen(false)}
              style={{ fontSize: '24px' }}
            />
          }
          middle="Bộ lọc"
          endIcon={
            <i className="icon vns-Filter" style={{ fontSize: '24px' }} />
          }
        />
        <div style={{ height: '30vh' }} />
      </SlidingPanel>
    </div>
  );
};

export const MaxHeight = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '180vh' }}>
      <Button onClick={() => setOpen(true)}>Open Panel</Button>
      <SlidingPanel open={open} onClose={() => setOpen(false)} minHeight={100}>
        <Appbar
          startIcon={
            <i
              className="icon vns-Close-X"
              onClick={() => setOpen(false)}
              style={{ fontSize: '24px' }}
            />
          }
          middle="Bộ lọc"
          endIcon={
            <i className="icon vns-Filter" style={{ fontSize: '24px' }} />
          }
        />
        <div style={{ height: '30vh' }} />
      </SlidingPanel>
    </div>
  );
};
