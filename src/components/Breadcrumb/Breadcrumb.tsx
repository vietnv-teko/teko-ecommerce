import React from 'react';
import classname from 'classnames/bind';
import styles from './Breadcrumb.module.css';

let cx = classname.bind(styles);
export type BreadcrumbProps = {
  /**
   * list of links
   * */
  linkList: string[];
  /**
   * Callback fired when click component
   * */
  onClick?: () => void;
  /**
   * custom style of component
   * */
  className?: string;
};
const Breadcrumb = (props: BreadcrumbProps) => {
  const { linkList, onClick, className } = props;
  return (
    <ul className={cx('breadcrumb', classname ? className : '')}>
      {linkList.map((item: any, index: any) => (
        <>
          {index !== linkList.length - 1 ? (
            <>
              <li onClick={onClick} className={cx('clickable-item')}>
                {index !== 0 && <span className={cx('before-item')}>/</span>}
                {item}
              </li>
            </>
          ) : (
            <>
              <li>
                {index !== 0 && <span className={cx('before-item')}>/</span>}
                {item}
              </li>
            </>
          )}
        </>
      ))}
    </ul>
  );
};

export default Breadcrumb;
