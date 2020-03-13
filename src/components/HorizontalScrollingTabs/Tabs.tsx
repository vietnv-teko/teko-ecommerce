import React, { useEffect } from 'react';
import classname from 'classnames/bind';
import styles from './Tabs.module.css';

let cx = classname.bind(styles);

export type HorizontalScollingTabsProps = {
  /**
   * Current tab active
   */
  activeTab: number;
  /**
   * Action when set tab active
   */
  setActiveTab: (activeTab: number) => void;
  /**
   * List item
   */
  list: any[];
  /**
   * style smooth
   */
  smoothTab: boolean;
  /**
   * custom style of component.
   */
  className?: string;
};
const HorizontalScollingTabs = (props: HorizontalScollingTabsProps) => {
  const { activeTab, setActiveTab, list, smoothTab, className } = props;

  const handleClickTab = (tabId: number) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
  };
  useEffect(() => {
    // Auto scroll tab
    const tab = document.getElementById('tabs');
    const el = document.getElementById(`tab-${activeTab}`);
    if (tab && el && tab.scroll) {
      tab.scroll({
        left: el.offsetLeft - (tab.offsetWidth - el.offsetWidth) / 2,
        behavior: smoothTab ? 'smooth' : undefined,
      });
    }
  }, [activeTab, smoothTab]);
  return (
    <div id="tabs" className={cx('tabs', className)}>
      {list.map((tab, index) => {
        return (
          <div
            key={tab.id}
            id={`tab-${index + 1}`}
            className={cx('item', { active: index + 1 === activeTab })}
            onClick={() => handleClickTab(index + 1)}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScollingTabs;
