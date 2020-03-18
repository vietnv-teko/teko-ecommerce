import React from 'react';
import classname from 'classnames/bind';
import styles from './Link.module.css';

let cx = classname.bind(styles);

export type LinkProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * The URL of the page the link goes to
   * */
  href?: string;
  /**
   *The color of the component
   */
  color?: string;
  /**
   * Underline style of component. Include: Alway, hover, none
   */
  underline?: string;
  /**
   * Callback fired when click component
   * */
  onClick?: () => void;
};
const Link: React.FC<LinkProps> = props => {
  const {
    className,
    href,
    underline = 'none',
    children,
    color = '#047fff',
    onClick,
  } = props;

  return (
    <a
      href={href}
      className={cx(
        'link',
        className,
        { underline: underline === 'always' },
        { linkHover: underline === 'hover' },
        { noneUnderline: underline === 'none' },
      )}
      style={{ color: color }}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Link;
