import React, { useState } from 'react';
import SlidingPanel from './SlidingPanel';
import Button from 'components/Button';
import Container from 'components/Container';
import Appbar from 'components/Appbar';

export default {
  title: 'SlidingPanel',
  decorators: [(storyFn: any) => <Container>{storyFn()}</Container>],
};

export const DefaultPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '180vh' }}>
      <Button
        color={'primary'}
        variant={'contained'}
        onClick={() => setOpen(true)}
      >
        Open Panel
      </Button>
      <SlidingPanel open={open} onClose={() => setOpen(false)}>
        <Appbar
          startIcon={
            <i className={'icon vns-Close-X'} onClick={() => setOpen(false)} style={{fontSize: "24px"}}/>
          }
          middle={'Bộ lọc'}
          endIcon={<i className={'icon vns-Filter'} style={{fontSize: "24px"}}/>}
        />
      </SlidingPanel>
    </div>
  );
};
