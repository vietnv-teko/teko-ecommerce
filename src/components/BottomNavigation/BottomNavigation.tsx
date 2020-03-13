import React from 'react';
import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IBottomNavigation {
  navItems: any[];
  color?: string;
  hideLabels?: boolean;
  active: string | number;
  onChange: any;
  className?: string;
}

const BottomNavigation: React.FC<IBottomNavigation> = ({
  color = '#1669a8',
  hideLabels = true,
  navItems,
  active,
  onChange,
  className = '',
}) => {
  return (
    <div className={cx('bottom_nav', className, { hide_label: hideLabels })}>
      {navItems.map(
        ({ label, activeIcon, inactiveIcon, value }: any, index: number) => {
          let isActive = value || index === active;
          return (
            <div
              className={cx('nav_item', { active: isActive })}
              onClick={event => onChange(event, value || index)}
              style={{ color: isActive ? color : '' }}
              key={index}
            >
              {isActive ? activeIcon : inactiveIcon}
              <span className={cx('label')}>{label}</span>
            </div>
          );
        },
      )}
    </div>
  );
};

export default BottomNavigation;
