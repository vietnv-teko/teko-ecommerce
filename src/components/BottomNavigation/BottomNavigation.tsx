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
    <div
      className={cx({
        bottom_nav: true,
        hide_label: hideLabels,
        [className]: true,
      })}
    >
      {navItems.map(
        ({ label, activeIcon, inactiveIcon, value }: any, idx: number) => {
          let isActive = value || idx === active;
          return (
            <div
              className={cx({ nav_item: true, active: isActive })}
              onClick={event => onChange(event, value || idx)}
              style={{ color: isActive ? color : '' }}
              key={idx}
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
