import React from 'react';
import styles from './BottomNavigationItem.module.scss';
import classNames from 'classnames/bind';
import Badge from 'components/Common/Badge';
import Icon from 'components/Common/Icon';

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
    color = '#eb1f3a',
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
      <Badge
        color={color}
        offsetX={10}
        offsetY={10}
        value={badgeValue}
        max={badgeMax}
      >
        {active ? (
          <Icon size={24} color={color} className={cx('icon')}>
            {navItem.activeIcon}
          </Icon>
        ) : (
          <Icon size={24} className={cx('icon')}>
            {navItem.inActiveIcon}
          </Icon>
        )}
      </Badge>
      <span className={cx('label')}>{navItem.label}</span>
    </div>
  );
};

export default BottomNavigationItem;
