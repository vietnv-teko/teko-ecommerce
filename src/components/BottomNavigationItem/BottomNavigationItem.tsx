import React from 'react';
import styles from './BottomNavigationItem.module.scss';
import classNames from 'classnames/bind';
import Badge from 'components/Badge';

let cx = classNames.bind(styles);

interface IBottomNavigationItem {
  navItem: any;
  color?: string;
  active: boolean;
  onClick?: () => void;
  hideLabel?: boolean;
  className?: string;
  badgeValue?: number;
  badgeMax?: number;
}

const BottomNavigationItem: React.FC<IBottomNavigationItem> = props => {
  const {
    navItem,
    color = '#1669a8',
    active,
    onClick,
    hideLabel,
    className,
    badgeValue,
    badgeMax,
  } = props;
  return (
    <div
      className={cx(
        'nav_item',
        className,
        { active },
        { 'hide-label': hideLabel },
      )}
      style={{ color: active ? color : '' }}
      onClick={onClick}
    >
      <Badge offsetX={10} offsetY={10} value={badgeValue} max={badgeMax}>
        {active ? navItem.activeIcon : navItem.inActiveIcon}
      </Badge>
      <span className={cx('label')}>{navItem.label}</span>
    </div>
  );
};

export default BottomNavigationItem;
