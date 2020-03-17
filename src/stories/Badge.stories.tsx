import React from 'react';
import Badge from 'components/Common/Badge/Badge';

export default {
  title: 'Badge',
};

export const DefaultBadge = () => <Badge value={9}>Inbox</Badge>;

export const OverflowBadge = () => (
  <Badge value={100} max={50} color="#e00315">
    Mail
  </Badge>
);
