import React from 'react';
import Badge from './Badge';

export default {
  title: 'Badge',
};

export const SecondaryBadge = () => (
  <Badge value={9} color="#e00315">
    Inbox
  </Badge>
);

export const PrimaryBadge = () => (
  <Badge value={100}>
    Mail
  </Badge>
);

export const OverflowBadge = () => (
  <Badge value={1999} color="#e00315">
    Spam
  </Badge>
);
