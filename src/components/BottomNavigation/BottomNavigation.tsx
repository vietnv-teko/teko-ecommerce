import React from 'react';
import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';
import { withRouter, RouteComponentProps } from 'react-router-dom';

let cx = classNames.bind(styles);

interface IBottomNavigation {
  navItems: any[];
  color?: string;
  hideLabels?: boolean;
}

const BottomNavigation: React.FC<IBottomNavigation & RouteComponentProps> = ({
  history,
  color = 'secondary',
  hideLabels = true,
  navItems,
}) => {
  return (
    <div
      className={cx({
        bottom_nav: true,
        [color]: true,
        hide_label: hideLabels,
      })}
    >
      {navItems.map(({ path, label, activeIcon, inactiveIcon }: any) => {
        let active = window.location.pathname === path;
        return (
          <div
            className={cx({ nav_item: true, active })}
            onClick={() => history.push(path)}
            style={{flexBasis: `${100 / navItems.length}%`}}
          >
            {active ? activeIcon : inactiveIcon}
            <span className={cx('label')}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(BottomNavigation);
