import React from 'react';
import Badge from './Badge';

export default {
  title: 'Badge',
};

export const SecondaryBadge = () => (
  <Badge value={9} color="secondary">
    Inbox
  </Badge>
);

export const PrimaryBadge = () => (
  <Badge value={100} color="primary">
    Mail
  </Badge>
);

export const OverflowBadge = () => (
  <Badge value={1999} color="secondary">
    Spam
  </Badge>
);
