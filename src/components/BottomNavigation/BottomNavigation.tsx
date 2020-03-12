import React from 'react';
import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';
import { withRouter, RouteComponentProps } from 'react-router-dom';

let cx = classNames.bind(styles);

interface IBottomNavigation {
  showLabels?: boolean;
  navItems: any[];
  color?: string;
}

const BottomNavigation: React.FC<IBottomNavigation & RouteComponentProps> = ({
  history,
  color,
  showLabels,
  navItems,
}) => {
  return (
    <div className={cx('bottom_nav', color)}>
      {navItems.map(({ path, label, activeIcon, inactiveIcon }: any) => {
        let active = window.location.pathname === path;
        return (
          <div
            className={cx({ nav_item: true, active, showLabels })}
            onClick={() => history.push(path)}
          >
            {active ? activeIcon : inactiveIcon}
            {showLabels && <span className={cx('label')}>{label}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(BottomNavigation);
